import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  constructor(private geolocation: Geolocation){}
  
  lat = 0.0;
  lng = 0.0;
 
  ngOnInit() {

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      this.lat = parseFloat(`${ resp.coords.latitude }`); 
      this.lng = parseFloat(`${ resp.coords.longitude }`);

      // const coords = `${ resp.coords.latitude },${resp.coords.longitude}`;

      var popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML('<h2>Ubicación</h2><p>Usted se encuentra aquí</p> <img src="/assets/Neiva/galeria2296.jpg" style="height: 50%; width: 50%;" class="center">');

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ this.lng, this.lat],
        zoom : 15
      });
  
      const marker = new mapboxgl.Marker({color: 'red'})
        .setLngLat ( [ this.lng, this.lat] )
        .setPopup(popup)
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
