import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProveedorService } from '../proveedor/proveedor.service';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { PostProvider } from 'src/providers/post-provider';
import { Platform } from '@ionic/angular';

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
  subscribe: any;
  customers: any = [];
  nombre: any = [];
  descripcion : any = []; 
  latitud: any = [];
  longitud: any = [];


  ionViewWillEnter(): void {
    this.geolocation.watchPosition();
    this.loadCustomer();
  }

  constructor(private geolocation: Geolocation, private postPvdr: PostProvider, public platform: Platform, activatedRoute: ActivatedRoute, private http: HttpClient, private proveedorService: ProveedorService, public navCtrl: NavController) {
    /*this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name == "MapasPage"){
        if(window.confirm("Desea salir de la aplicación"))
        {
          navigator["app"].exitApp();
        }
      }
    })*/
  }

  lat = 0.0;
  lng = 0.0;

  latitud_monumento = 0.0;
  longitud_monumento = 0.0;

  informacion = null;

  salir() {
    if (window.confirm("Desea salir de la aplicación")) {
      navigator["app"].exitApp();
    }
  }

  loadCustomer() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata3'
      };
      this.postPvdr.postData(body, 'proses-api.php')
        .subscribe(data => {
          for (let customer of data.result) {
            this.customers.push(customer);
            this.nombre.push(customer.name_customer);
            this.descripcion.push(customer.desc_customer);
            this.latitud.push(customer.latitud_monumento);
            this.longitud.push(customer.longitud_monumento);
          }
          resolve(true);
        });
      console.log(this.customers);
      console.log(this.nombre,this.descripcion,this.latitud,this.longitud);
    });

  }

  
  ngOnInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoianVhbmNhc3Rhbm8xOTk2IiwiYSI6ImNrMXR0dWl3bDAzMmQzY282cjN5N212Z3gifQ.XsgCaqUwSxs1YIVeGK0idA';

    

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      this.lat = parseFloat(`${resp.coords.latitude}`);
      this.lng = parseFloat(`${resp.coords.longitude}`);

      // const coords = `${ resp.coords.latitude },${resp.coords.longitude}`;


      var map = new mapboxgl.Map({

        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.lng, this.lat],
        zoom: 15
      });

      var geojson = {
        type:'FeatureCollection',
        features:[{
          type:'Feature',
          geometry:{
            type:'point',
            coordinates : [this.longitud, this.latitud]
          },
          properties:{
            title: this.nombre,
            description: this.descripcion
          }
        }]
      }
  
      console.log(geojson)
  
      geojson.features.forEach(function(marker){
        new mapboxgl.Marker()
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);


        new mapboxgl.Marker()
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
          .addTo(map);
      })

     



      map.on('load', function () {
      

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
    });
  }
}