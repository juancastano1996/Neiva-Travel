import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable(

)
export class ProvidersService {

  constructor(public http:HttpClient) {
    console.log('hola proveedor');
   }

   obtenerDatos(){
     return this.http.get('http://localhost/php/conexion/post.php');
   }
}
