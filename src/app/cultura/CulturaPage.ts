import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cultura',
  templateUrl: 'cultura.page.html',
  styleUrls: ['cultura.page.scss']
})
export class CulturaPage implements OnInit {

  mostrar = true;  
  mostrar1 = true;
  
  constructor() {  }

  cambiarTexto() {
    if(this.mostrar) {
      this.mostrar = false;
      this.mostrar1 = true;
    }
    else{
      this.mostrar = true;
      this.mostrar1 = true;
    }
  }

  cambiarTexto1(){
    if(this.mostrar1){
      this.mostrar = true;
    }else{
      this.mostrar = true;
     

    }
  }

  cambiarTexto2(){
    if(this.mostrar1){
      this.mostrar = true;
      this.mostrar1 = false;
    }else{
      this.mostrar = true;
      this.mostrar1 = true;

    }
  }
  
  cambiarTexto3(){
    if(this.mostrar1){
      this.mostrar1 = false;
    }else{
      this.mostrar1 = false;

    }
  }
  ngOnInit() {
  }
}
