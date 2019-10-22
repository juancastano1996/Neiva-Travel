import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { UiServiceService } from '../services/ui-service.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides

  loginUser = {
    email : '',
    password : ''
   }


   
  registroUser = {
    email : '',
    nombre: '',
    password : '',
    password1 : ''
  }


  usuario = 'camilo';
  contraseña ='camilo96';


  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uiService: UiServiceService) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login( fLogin:NgForm ){
    this.loginUser.email

    if(this.loginUser.email == this.usuario && this.loginUser.password == this.contraseña){
      this.navCtrl.navigateRoot('/home');
    }else{
      this.uiService.alertaInformativa('Usuario y/o contraseña incorrecta.')
    }
    //this.navCtrl.navigateRoot('/home', {animated: true} );
    /*if (fLogin.invalid){return;}
    const valido = await this.usuarioService.login(this.loginUser.email,this.loginUser.password);

    if ( valido ){
      this.navCtrl.navigateRoot('http://localhost:8100/home'/*Crear pagina de lo q tiene el usuario de la app, {animated: true} );
    }else{
      this.uiService.alertaInformativa('Usuario y/o contraseña incorrecta.')
    }
  }

  registro(fRegistro:NgForm){
    console.log(fRegistro.valid);
  }*/
}
async registro( fRegistro:NgForm ){

  if(this.registroUser.email == this.usuario && this.registroUser.password == this.registroUser.password1){
    this.uiService.alertaInformativa('Usuario creado');
  }else{
    this.uiService.alertaInformativa('Usuario y/o contraseña incorrecta.')
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