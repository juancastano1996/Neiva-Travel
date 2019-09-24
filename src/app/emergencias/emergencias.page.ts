import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-emergencias',
  templateUrl: 'emergencias.page.html',
  styleUrls: ['emergencias.page.scss']
})
export class EmergenciasPage  {
  constructor(private iab: InAppBrowser){
    
  }
    }
  

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
