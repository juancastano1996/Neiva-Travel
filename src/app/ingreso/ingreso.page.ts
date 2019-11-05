import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { UiServiceService } from '../services/ui-service.service';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  usuarios : any = [];

  @ViewChild('slidePrincipal') slides: IonSlides

  loginUser = {
    email : "",
    password : "",
    tipo_user : ""
   }
   
  registroUser = {
    email :"",
    nombre: "",
    password : "",
    confirm_password : "",
    tipo_user : ""
  }

  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uiService: UiServiceService,
              private router: Router,
              private postPvdr: PostProvider,
              public toastCtrl: ToastController,
              private storage: Storage) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }
  ionViewWillEnter(){
    this.usuarios = [];
    this.loadUsuarios;
  }

  async processLogin(email,tipo_user){  
    if(this.loginUser.tipo_user=="usuario"){//cambiar condicional para que tome el tipo de usuario
      if(this.loginUser.email!="" && this.loginUser.password!=""){
        email = this.loginUser.email;
        tipo_user = this.loginUser.tipo_user;
      let body={
        email: this.loginUser.email,
        password: this.loginUser.password,
        tipo_user: this.loginUser.tipo_user,
        aksi:'login'
      };
      this.loadUsuarios();
      this.postPvdr.postData(body,'proses-api.php')
      .subscribe(async data => {
        var alertmsg = data.msg;
        if(data.success){
          this.storage.set('session_storage',data.result);
          this.router.navigate(['/customer/'+ email + '/' + tipo_user]);
          const toast = await this.toastCtrl.create({
            message: 'Ingreso exitoso',
            duration: 2000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
      });
    }else{
      const toast = await this.toastCtrl.create({
        message: 'Usuario y/o contraseña incorrectos',
        duration: 2000
      });
      toast.present();
    }
    }else if(this.loginUser.tipo_user == "administrador"){
      if(this.loginUser.email!="" && this.loginUser.password!=""){
        email = this.loginUser.email;
        tipo_user = this.loginUser.tipo_user;
      let body={
        email: this.loginUser.email,
        password: this.loginUser.password,
        tipo_user: this.loginUser.tipo_user,
        aksi:'login'
      };
      this.postPvdr.postData(body,'proses-api.php')
      .subscribe(async data => {
        var alertmsg = data.msg;
        if(data.success){
          this.storage.set('session_storage',data.result);
          this.router.navigate(['/customer/'+ email + '/' + tipo_user]);
          const toast = await this.toastCtrl.create({
            message: 'Ingreso exitoso',
            duration: 2000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
      });
    }else{
      const toast = await this.toastCtrl.create({
        message: 'Usuario y/o contraseña incorrectos',
        duration: 2000
      });
      toast.present();
    }

    }else{
      console.log('no tiene usuario');
    }
    
  }
  loadUsuarios(){
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata2'
      };
      this.postPvdr.postData(body,'proses-api.php')
      .subscribe(data => {
        for(let usuario of data.result){
          this.usuarios.push(usuario);
        }
        resolve(true);
      });

    });
  }
  
  async prosesRegister(){
    if(this.registroUser.email==""){
      const toast = await this.toastCtrl.create({
        message: 'Se necesita el correo',
        duration: 2000
      });
      toast.present();
    }else if(this.registroUser.password==""){
      const toast = await this.toastCtrl.create({
        message: 'Se necesita la contraseña',
        duration: 2000
      });
      toast.present();
    }else if(this.registroUser.nombre==""){
      const toast = await this.toastCtrl.create({
        message: 'Se necesita nombre',
        duration: 2000
      });
      toast.present();
    }else if(this.registroUser.password!=this.registroUser.confirm_password){
      const toast = await this.toastCtrl.create({
        message: 'Contraseña incorrecta',
        duration: 2000
      });
      toast.present();
    }else{ 
      let body = {
        email: this.registroUser.email,
        username: this.registroUser.nombre,
        password: this.registroUser.password,
        tipo_user : 'usuario',
        aksi:'register'
      };
      this.postPvdr.postData(body,'proses-api.php')
      .subscribe(async data => {
        var alertmsg = data.msg;
        if(data.success){
          this.slides.lockSwipes(false);
          this.slides.slideTo(0);
          this.slides.lockSwipes(true);
          const toast = await this.toastCtrl.create({
            message: 'Registro exitoso',
            duration: 2000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
        }
      });
    }
  }
  



  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }


  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  

}