import { Component, OnInit, EventEmitter } from '@angular/core';
import { PostProvider} from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
  cargandoGeo = false;
  items: any; 
  name_customer: string = "";
  desc_customer: string = "";
  latitud_monumento: number;
  longitud_monumento: number;
  posicion: string;

  id: number;
  nuevoPost = new EventEmitter<PostProvider>();
  tempImages: string[]=[];

  constructor(private postPvdr: PostProvider, 
              private router:Router, 
              private actRoute: ActivatedRoute,
              public toastCtrl: ToastController,
              private geolocation:Geolocation,
              private camera: Camera) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.id = data.id;
  		this.name_customer = data.name;
      this.desc_customer = data.desc;
      this.latitud_monumento = data.lat;
      this.longitud_monumento = data.long;
      this.posicion = data.pos;
  		console.log(data);
    });
  }
  createdProcess(){
    return new Promise(resolve => {
      let body = {
        aksi: 'add',
        name_customer : this.name_customer,
        desc_customer : this.desc_customer,
        latitud_monumento : this.latitud_monumento,
        longitud_monumento: this.longitud_monumento,
        posicion:this.posicion
      };
      this.postPvdr.postData(body,'proses-api.php')
      .subscribe(data => {
        this.router.navigate(['/customer']);
        console.log('ok');
      });

    });

  }
  updateProcess(){
    return new Promise(resolve => {
      let body = {
        aksi : 'update',
  			customer_id : this.id,
  			name_customer : this.name_customer,
        desc_customer : this.desc_customer,
        latitud_monumento : this.latitud_monumento,
        longitud_monumento: this.longitud_monumento,
        posicion:this.posicion
      };
      this.postPvdr.postData(body,'proses-api.php')
      .subscribe(data => {
        this.router.navigate(['/customer']);
        console.log('ok');
      });

    });

  }

  
  
  getGeo(){

    if(!this.posicion){
      this.latitud_monumento = null;
      this.longitud_monumento = null;
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
      this.longitud_monumento = longitude;
      this.latitud_monumento = latitude;
      
    }).catch((error) => {
      console.log('Error getting location', error);
      this.cargandoGeo = false;
    });
    console.log('OK');
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
