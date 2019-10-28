import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { UiServiceService } from '../services/ui-service.service';
import { Router } from '@angular/router';

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



  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uiService: UiServiceService,
              private router: Router) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login( fLogin:NgForm ){

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

    if(valido){
      this.navCtrl.navigateRoot('/home');
    }else{
      this.uiService.alertaInformativa('Usuario y/o contraseña incorrecta.')
    }
}
async registro( fRegistro:NgForm ){
  const valido = await this.usuarioService.registro( this.registroUser );

  if(valido){
    this.navCtrl.navigateRoot('/home');
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