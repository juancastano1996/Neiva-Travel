import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides

  constructor() { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  login( fLogin:NgForm ){
    console.log(fLogin.valid);
  }

  registro(fRegistro:NgForm){
    console.log(fRegistro.valid);
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
