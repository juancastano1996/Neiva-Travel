import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  private usuario: Usuario = {};

  constructor(private http: HttpClient,
              private storage: Storage,
              private navCtrl: NavController
    ) { }

    login(email: string, password: string){
      const data = {email, password};

      return new Promise(resolve=>{
      this.http.post('http://localhost/php/conexion/usuarios.php',data)
      .subscribe(async resp => {
        console.log(resp);

        if ( resp['ok'] ) {
          await this.guardarToken( resp['token'] );
          resolve(true);
        } else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
      
    },)
  };
  logout() {
    this.token   = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/ingreso', { animated: true });
  }

  registro( usuario: Usuario){
    return new Promise( resolve => {

      this.http.post(`${ URL }/usuarios`, usuario )
          .subscribe( async resp => {
            console.log(resp);

            if ( resp['ok'] ) {
              await this.guardarToken( resp['token'] );
              resolve(true);
            } else {
              this.token = null;
              this.storage.clear();
              resolve(false);
            }

          });
    
  },)}

  getUsuario() {

    if ( !this.usuario._id ) {
      this.validaToken();
    }

    return { ...this.usuario };

  }


  async guardarToken( token: string ) {

    this.token = token;
    await this.storage.set('token', token);

    await this.validaToken();


  }

  async cargarToken() {

    this.token = await this.storage.get('token') || null;

  }


  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if ( !this.token ) {
      this.navCtrl.navigateRoot('/registro');
      return Promise.resolve(false);
    }


    return new Promise<boolean>( resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(`${ URL }/usuarios`, { headers })
        .subscribe( resp => {

          if ( resp['ok'] ) {
            this.usuario = resp['usuario'];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }

        });


    });

  }


  actualizarUsuario( usuario: Usuario ) {


    const headers = new HttpHeaders({
      'x-token': this.token
    });


    return new Promise( resolve => {

      this.http.post(`${ URL }/usuarios`, usuario, { headers })
        .subscribe( resp => {

          if ( resp['ok'] ) {
            this.guardarToken( resp['token'] );
            resolve(true);
          } else {
            resolve(false);
          }

        });

    });



  }


}
