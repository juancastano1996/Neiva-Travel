import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(public http:HttpClient) {
    console.log('hola proveedor 251'); 
   }

   GET(){
     return this.http.get('http://localhost/php/conexion/post.php');
   }

}
