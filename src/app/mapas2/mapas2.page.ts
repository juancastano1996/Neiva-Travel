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
  selector: 'app-mapas2',
  templateUrl: './mapas2.page.html',
  styleUrls: ['./mapas2.page.scss'],
})
export class Mapas2Page implements OnInit {

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
    center: [ -75.296511,2.929219 ],
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
                  [
            -75.25471687316895,
            3.033297728148961
          ],
          [
            -75.25445938110352,
            3.031669228649057
          ],
          [
            -75.25506019592285,
            3.0309835439156343
          ],
          [
            -75.25626182556151,
            3.0293550409325265
          ],
          [
            -75.25729179382324,
            3.028755065531745
          ],
          [
            -75.25875091552734,
            3.0281550897985183
          ],
          [
            -75.26012420654297,
            3.0281550897985183
          ],
          [
            -75.26149749755858,
            3.0284122222963155
          ],
          [
            -75.2629566192627,
            3.027469402839305
          ],
          [
            -75.26415824890135,
            3.0262694496164233
          ],
          [
            -75.26518821716309,
            3.025240917225035
          ],
          [
            -75.26596069335938,
            3.023698116808473
          ],
          [
            -75.26578903198241,
            3.0214696234440948
          ],
          [
            -75.26501655578613,
            3.020012529155052
          ],
          [
            -75.2647590637207,
            3.0170983347129785
          ],
          [
            -75.26493072509766,
            3.0136698606620227
          ],
          [
            -75.26596069335938,
            3.0115270588946346
          ],
          [
            -75.26802062988281,
            3.009127115909997
          ],
          [
            -75.26930809020996,
            3.0065557425624934
          ],
          [
            -75.26947975158691,
            3.002184393964165
          ],
          [
            -75.26973724365233,
            2.9992701518463147
          ],
          [
            -75.26965141296387,
            2.996870181917417
          ],
          [
            -75.26965141296387,
            2.9941273526973067
          ],
          [
            -75.27016639709473,
            2.993184503566421
          ],
          [
            -75.27153968811035,
            2.992241653624239
          ],
          [
            -75.27291297912598,
            2.9923273672888593
          ],
          [
            -75.27471542358398,
            2.9928416491358467
          ],
          [
            -75.27634620666504,
            2.992670221880319
          ],
          [
            -75.27874946594238,
            2.991641657784208
          ],
          [
            -75.28055191040039,
            2.9898416682941797
          ],
          [
            -75.28252601623535,
            2.9876131057861204
          ],
          [
            -75.28518676757811,
            2.98504168188627
          ],
          [
            -75.2867317199707,
            2.983413110303407
          ],
          [
            -75.28801918029785,
            2.9818702507889583
          ],
          [
            -75.28956413269043,
            2.981527392825131
          ],
          [
            -75.29119491577148,
            2.981441678317486
          ],
          [
            -75.29299736022949,
            2.9821273941916813
          ],
          [
            -75.29488563537598,
            2.981527392825131
          ],
          [
            -75.29617309570312,
            2.980327389110333
          ],
          [
            -75.29823303222656,
            2.9773273740997634
          ],
          [
            -75.29960632324219,
            2.975270216227254
          ],
          [
            -75.30072212219238,
            2.971755895982354
          ],
          [
            -75.30080795288086,
            2.9683272800810387
          ],
          [
            -75.30080795288086,
            2.9642129269572757
          ],
          [
            -75.30055046081543,
            2.962070028644901
          ],
          [
            -75.30123710632324,
            2.960355707008959
          ],
          [
            -75.30458450317381,
            2.9561556077935105
          ],
          [
            -75.3072452545166,
            2.9530698104817223
          ],
          [
            -75.3083610534668,
            2.9491268347748947
          ],
          [
            -75.3087043762207,
            2.9458695834289497
          ],
          [
            -75.30896186828613,
            2.942869475074393
          ],
          [
            -75.30879020690918,
            2.941840864636201
          ],
          [
            -75.30913352966309,
            2.9396122054316964
          ],
          [
            -75.30887603759764,
            2.9378121312857988
          ],
          [
            -75.30673027038574,
            2.9362692082792727
          ],
          [
            -75.30415534973145,
            2.93481200126066
          ],
          [
            -75.30218124389648,
            2.9326690463113723
          ],
          [
            -75.30037879943848,
            2.9310403978036392
          ],
          [
            -75.29909133911133,
            2.93078324255938
          ],
          [
            -75.29780387878418,
            2.9297546209915364
          ],
          [
            -75.29720306396484,
            2.929240309853167
          ],
          [
            -75.29651641845703,
            2.9270116255243543
          ],
          [
            -75.29351234436035,
            2.9230685577785596
          ]
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