import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor(private http: HttpClient,
              private storage: Storage
    ) { }

    login(email: string, password: string){
      const data = {email, password};

      return new Promise(resolve=>{
      this.http.get('http://localhost/php/conexion/usuarios.php')
      .subscribe(resp => {
        console.log(resp);


      });
      
    },)
  };

  //registro(usuario: Usuario){}

  async guardarToken(token:string){
    this.token = token;
    await this.storage.set('token',token);
  }
}
