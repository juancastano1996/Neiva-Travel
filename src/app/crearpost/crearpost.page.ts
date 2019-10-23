import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var mapboxgl: any;
declare var MapboxGeocoder: any;
declare var window: any;

@Component({
  selector: 'app-crearpost',
  templateUrl: './crearpost.page.html',
  styleUrls: ['./crearpost.page.scss'],
})
export class CrearpostPage implements OnInit {

  cargandoGeo = false;

  ngOnInit() {
  }

  tempImages: string[]=[];

  post={
    nombre_monumento:'',
    descripcion_monumento:'',
    latitud_monumento: null,
    longitud_monumento: null,
    posicion: false
  };

  constructor(private postService: PostsService, private geolocation:Geolocation, private camera: Camera) { }

  crearPost(){
    console.log(this.post)
    this.postService.crearPost(this.post);

  }


  getGeo(){

    if(!this.post.posicion){
      this.post.latitud_monumento = null;
      this.post.longitud_monumento = null;
      return;
    }

    this.cargandoGeo = true;

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.cargandoGeo = false;
      
      const longitude =  parseFloat(`${resp.coords.longitude}`)
      const latitude =  parseFloat(`${resp.coords.latitude}`);
      console.log(longitude,latitude);
      this.post.longitud_monumento = longitude;
      this.post.latitud_monumento = latitude;
      
    }).catch((error) => {
      console.log('Error getting location', error);
      this.cargandoGeo = false;
    });
 

    console.log(this.post);
  }

  camara(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.procesarImagen(options);
    
  }


  libreria(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.procesarImagen(options);

  }

  procesarImagen(options: CameraOptions){
    this.camera.getPicture(options).then( (imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const img = window.Ionic.webView.convertFileSrc(imageData);
      console.log(img);
      this.tempImages.push( img );
     }, (err) => {
      // Handle error
     });
  }
}
