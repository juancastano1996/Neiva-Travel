import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public items: Array<{
    descripcion: string;
  }> = [];

  mostrar = true;

  oculto = 'Texto 1';

  constructor() {
    //const descripcion:'dafneianfnioueawhbdfeoiuafdsafeasfmeas fskjasfneka efasefa'
  }

  cambiarTexto() {
    if(this.mostrar) {
      this.oculto = 'Texto 2';
      this.mostrar = false;
      console.log('Texto cambiado');
    }else {
      this.oculto = 'Texto 1';
      this.mostrar = true;
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
