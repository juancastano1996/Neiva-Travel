import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProveedorService } from '../proveedor/proveedor.service';
import { NavController } from '@ionic/angular';

declare var mapboxgl: any;
declare var MapboxGeocoder: any;

@Component({
  selector: 'app-mapas2',
  templateUrl: './mapas2.page.html',
  styleUrls: ['./mapas2.page.scss'],
})
export class Mapas2Page implements OnInit {

  activatedRoute: any;
  items: any;

  ionViewWillEnter():void{
    this.load();
  }

  load():void
  {
    this.http.get('http://localhost/php/conexion/monumentos.php')
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
  
  
  mapboxgl.accessToken = 'pk.eyJ1IjoianVhbmNhc3Rhbm8xOTk2IiwiYSI6ImNqeHcwamtxazBhb2IzZHM1aDM1MjU3NXgifQ.jOYskU4ZN3f1oBuL4QORZg';

  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude

    this.lat = parseFloat(`${ resp.coords.latitude }`); 
    this.lng = parseFloat(`${ resp.coords.longitude }`);

    // const coords = `${ resp.coords.latitude },${resp.coords.longitude}`;
    
  
  var map = new mapboxgl.Map({
    
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ -75.265393,2.991553 ],
    zoom: 12
    });

    map.addControl(new mapboxgl.NavigationControl());

    
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
        timeout: 3
      },
        trackUserLocation: true
    }))

    map.on('load', function() {
      map.addLayer({
        'id': 'lines',
        'type': 'line',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [{
              'type': 'Feature',
              'properties': {
                'color': '#F7455D' // red
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-75.254979, 3.033341],
                  [-75.254579, 3.031582],
                  [-75.257121, 3.028916],
                  [-75.259043, 3.028276],
                  [-75.261526, 3.028436],
                  [-75.264489, 3.026677],
                  [-75.265931, 3.024598],
                  [-75.266652, 3.022118],
                  [-75.265210, 3.018440],
                  [-75.265090, 3.014441],
                  [-75.266491, 3.010962],
                  [-75.268493, 3.008843],
                  [-75.269815, 2.999326],
                  [-75.269455, 2.995727],
                  [-75.269535, 2.993088],
                  [-75.270536, 2.992009],
                  [-75.275261, 2.993048],
                  [-75.278184, 2.992009],
                  [-75.280906, 2.989090],
                  [-75.282588, 2.986450],
                  [-75.286112, 2.984131],
                  [-75.288915, 2.980572],
                  [-75.293279, 2.982412],
                  [-75.297083, 2.979973],
                  [-75.300246, 2.974254],
                  [-75.300927, 2.969456],
                  [-75.300807, 2.961178],
                  [-75.302489, 2.958339],
                  [-75.305131, 2.956740],
                  [-75.307174, 2.953461],
                  [-75.308735, 2.946663],
                  [-75.308975, 2.940704],
                  [-75.308935, 2.938185],
                  [-75.303890, 2.934426],
                  [-75.300687, 2.931307],
                  [-75.298124, 2.930147],
                  [-75.296923, 2.928348],
                  [-75.296282, 2.925589],
                  [-75.293720, 2.922509],
                  [-75.292478, 2.921350]
                  ] 
                }
              }]
            }
          },
      'paint': {
      'line-width': 3,
      // Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
      // to set the line-color to a feature property value.
      'line-color': ['get', 'color']
      }
      });
      });
  }).catch((error) => {
    console.log('Error getting location', error);
  });
    
  let watch = this.geolocation.watchPosition();
  watch.subscribe((data) => {
  // data can be a set of coordinates, or an error (if an error occurred).
  // data.coords.latitude
  // data.coords.longitude
  }); }
}