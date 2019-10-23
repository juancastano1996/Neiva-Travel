import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { environment } from '../../environments/environment';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  items: any;

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  crearPost(post){
    this.http.post(`${URL}/monumentos.php`,post)
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
