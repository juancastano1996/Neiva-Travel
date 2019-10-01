import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import * as Leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Response } from 'selenium-webdriver/http';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  constructor(private geolocation: Geolocation){}

  post = {
    coords:null
  }
  
  
  lat = 2.914670;
  lng = -75.272863;
   
  
  ngOnInit() {

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      this.lat = parseFloat(`${ resp.coords.latitude }`); 
      this.lng = parseFloat(`${resp.coords.longitude}`);

      // const coords = `${ resp.coords.latitude },${resp.coords.longitude}`;

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ this.lng, this.lat],
        zoom : 15
      });
  
      const marker = new mapboxgl.Marker()
        .setLngLat ( [ this.lng, this.lat] )
        .addTo ( map );

    }).catch((error) => {
      console.log('Error getting location', error);
    });
     
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
    }); 

    mapboxgl.accessToken = 'pk.eyJ1IjoianVhbmNhc3Rhbm8xOTk2IiwiYSI6ImNqeHcwamtxazBhb2IzZHM1aDM1MjU3NXgifQ.jOYskU4ZN3f1oBuL4QORZg';
    
  }

  
}
