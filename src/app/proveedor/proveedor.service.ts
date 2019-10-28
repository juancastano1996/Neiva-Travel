import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(public http:HttpClient) {
    console.log('hola proveedor 251'); 
   }

   GET(){
     return this.http.get(`${URL}/monumentos.php`);
   }

}
