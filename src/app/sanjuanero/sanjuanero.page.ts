import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanjuanero',
  templateUrl: 'sanjuanero.page.html',
  styleUrls: ['sanjuanero.page.scss']
})
export class SanjuaneroPage {
  
  mostrar = true;
  mostrar1= true;

  constructor() {}

  cambiarTexto() {
    if(this.mostrar) {
      this.mostrar = false;
      this.mostrar1 = true;
    }else{
      this.mostrar = true;
      this.mostrar1 = true;
    }
  }
  cambiarTexto1() {
    if(this.mostrar1) {
      this.mostrar = true;
      this.mostrar1 = false;
    }else{
      this.mostrar = true;
      this.mostrar1 = true;
    }
  }
  cambiarTexto2() {
    if(this.mostrar1) {
      this.mostrar = true;
      this.mostrar1 = true;
    }else{
      this.mostrar = true;
      this.mostrar1 = true;
    }
  }
}
