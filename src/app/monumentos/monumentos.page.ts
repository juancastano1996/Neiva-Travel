import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProveedorService } from '../proveedor/proveedor.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Component({
  selector: 'app-monumentos',
  templateUrl: 'monumentos.page.html',
  styleUrls: ['monumentos.page.scss']
})
export class MonumentosPage implements OnInit {
  items: any;  

  ngOnInit() {
    
  }

  constructor(public navCtrl:NavController,public proveedor: ProveedorService, public http: HttpClient){}

  ionViewWillEnter():void{
    this.load();
  }

  load():void
  {
    this.http.get(`${URL}/monumentos.php`)
    .subscribe((data : any) =>{
      console.dir(data);
      this.items = data;
    },
    (error : any)=>
    {
      console.dir(error);
    });
  }
 

}
