import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  map: Map;

  
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Map('mapId2').setView([2.9148083, -75.2738008], 18);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'Neiva Travel',
      maxZoom:18
    }).addTo(this.map);

    this.map.locate({ setView: true});

    function onLocationFound(e) {
      var radius = e.accuracy / 2;

      marker(e.latlng).addTo(this.map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

      Leaflet.circle(e.latlng, radius).addTo(this.map);
      Leaflet.loading.hide();
    }

    this.map.on('locationfound', onLocationFound);

  };
  
  

  ionViewWillLeave() {
    this.map.remove();
  }

}
