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

  numero = false;

  oculto = 15;

  constructor() {
    this.items.push ({
      descripcion:'dafneianfnioueawhbdfeoiuafdsafeasfmeas fskjasfneka efasefa'
    });
  }

  click(){
    if(this.numero = false){
      this.oculto = 15;
      this.numero = true;
    }else{
      this.numero = false;
      this.oculto = 150;
    
    }
  };

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
