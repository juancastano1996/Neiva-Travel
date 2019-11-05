import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: 'actividades.page.html',
  styleUrls: ['actividades.page.scss'],
})
export class ActividadesPage {
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
}
