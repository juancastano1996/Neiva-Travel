import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  mostrar = true;
  mostrar1= true;
  mostrar2= true;
  mostrar3= true;
  mostrar4= true;
  mostrar5= true;

  constructor() { }

  cambiarTexto() {
    if(this.mostrar) {
      this.mostrar1 = true;
      this.mostrar = false;
      this.mostrar2 = true;
      this.mostrar4 = true;
      this.mostrar3 = true;
      this.mostrar5 = true;
    }else {
      this.mostrar = true;
      this.mostrar2 = true;
      this.mostrar4 = true;
      this.mostrar3 = true;
      this.mostrar5 = true;
    }
  }

  cambiarTexto1() {
    if(this.mostrar1) {
      this.mostrar = true;
      this.mostrar1 = false;
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = true;
    }else {
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = true;

    }
  }
  
  cambiarTexto2() {
    if(this.mostrar1) {
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = true;
    }else {
      this.mostrar = true;
      this.mostrar1 = false;
      this.mostrar2 = true;
      this.mostrar3 = false;
      this.mostrar4 = true;

    }
  }

  cambiarTexto3() {
    if(this.mostrar1) {
      this.mostrar = true;
      this.mostrar1 = false;
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = true;
    }else {
      this.mostrar = true;
      this.mostrar1 = false;
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = true;

    }
  }

  cambiarTexto4() {
    if(this.mostrar1) {
      this.mostrar = true;
      this.mostrar1 = false;
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = false;
    }else {
      this.mostrar = true;
      this.mostrar1 = false;
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = false;

    }
  }

  cambiarTexto5() {
    if(this.mostrar1) {
      this.mostrar = true;
      this.mostrar1 = false;
      this.mostrar2 = false;
      this.mostrar3 = true;
      this.mostrar4 = true;
    }else {
      this.mostrar = true;
      this.mostrar1 = false;
      this.mostrar2 = false;
      this.mostrar3 = true;
      this.mostrar4 = true;

    }
  }
  cambiarTexto6() {
    if(this.mostrar1) {
      this.mostrar = false;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = true;
      this.mostrar5 = true;
    }else {
      this.mostrar = false;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
      this.mostrar4 = true;
      this.mostrar5 = true;
    }
  }
  cambiarTexto7() {
    if(this.mostrar) {
      this.mostrar1 = true;
      this.mostrar = false;
      this.mostrar2 = true;
      this.mostrar4 = true;
      this.mostrar3 = true;
      this.mostrar5 = true;
    }else {
      this.mostrar = false;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar4 = true;
      this.mostrar3 = true;
      this.mostrar5 = false;
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
