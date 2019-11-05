import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProveedorService } from '../proveedor/proveedor.service';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';

const URL = environment.url;

declare var mapboxgl: any;
declare var MapboxGeocoder: any;

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {
  activatedRoute: any;
  items: any;

  ionViewWillEnter():void{
    this.load();
    this.geolocation.watchPosition();
  }

  load():void
  {
    this.http.get(`${URL}/monumentos.php`)
    .subscribe((data : any) =>{
      console.dir(data);
      this.items = data;
    },
    (error : any)=>
    {
      console.dir(error);
    });
  }

  

  constructor(private geolocation: Geolocation,activatedRoute: ActivatedRoute, private http: HttpClient, private proveedorService: ProveedorService, public navCtrl:NavController){}
  
  lat = 0.0;
  lng = 0.0;

  informacion = null;

 
  ngOnInit() {
  
  
  mapboxgl.accessToken = 'pk.eyJ1IjoianVhbmNhc3Rhbm8xOTk2IiwiYSI6ImNrMXR0dWl3bDAzMmQzY282cjN5N212Z3gifQ.XsgCaqUwSxs1YIVeGK0idA';

  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude

    this.lat = parseFloat(`${ resp.coords.latitude }`); 
    this.lng = parseFloat(`${ resp.coords.longitude }`);

    // const coords = `${ resp.coords.latitude },${resp.coords.longitude}`;
    
  
  var map = new mapboxgl.Map({
    
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ this.lng, this.lat ],
    zoom: 15
    }); 
     
    map.on('load', function () {
    // Add a layer showing the places.
    var latitud = -75.277443;
    var longitud = 2.912180;

    //traer la informacion de la base de datos 

    map.addLayer({
    "id": "places",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "properties": {
            "description": "",
            "icon": "theatre"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [latitud,longitud ]
            }
          }
        ]
       }
    },
    "layout": {
      "icon-image": "{icon}-15",
      "icon-allow-overlap": true
      }
    });
     
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;
     
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
     
    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
    });
     
    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
    map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
    map.getCanvas().style.cursor = '';
    });

    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      placeholder: 'Buscar lugares en Neiva',
      bbox: [-75.310842, 2.898058, -75.247283, 2.960834], // Limites de Neiva
        proximity: {
          longitude: -75.285809,
          latitude: 2.925553
        } 
    }));
    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
        timeout: 3
      },
        trackUserLocation: true
    }))
    });
  }
  ).catch((error) => {
    console.log('Error getting location', error);
  });
   
  
  let watch = this.geolocation.watchPosition();
  watch.subscribe((data) => {
  // data can be a set of coordinates, or an error (if an error occurred).
  // data.coords.latitude
  // data.coords.longitude
  }); }
}