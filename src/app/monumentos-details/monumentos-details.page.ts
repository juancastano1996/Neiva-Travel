import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProveedorService } from '../proveedor/proveedor.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monumentos-details',
  templateUrl: './monumentos-details.page.html',
  styleUrls: ['./monumentos-details.page.scss'],
})
export class MonumentosDetailsPage implements OnInit {

  informacion = null;

  constructor(private activatedRoute: ActivatedRoute, private Http: HttpClient, private proveedorService: ProveedorService, public navCtrl:NavController) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id_monumentos');

    this.Http.get('http://localhost/php/conexion/post.php?id_monumentos='+id)
    .subscribe(result => {
      this.informacion = result;
      console.log(this.informacion);
    })
  }

  openWebsite() {
    window.open(this.informacion.Website, '_blank');
  }
}
