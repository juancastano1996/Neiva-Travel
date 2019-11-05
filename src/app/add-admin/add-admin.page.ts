import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { UiServiceService } from '../services/ui-service.service';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],
})
export class AddAdminPage implements OnInit {
  registroUser = {
    email :"",
    nombre: "",
    password : "",
    confirm_password : "",
    tipo_user : ""
  }

  constructor(private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UiServiceService,
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage) { }

  ngOnInit() {
  }
  async prosesRegister(){
    if(this.registroUser.email==""){
      const toast = await this.toastCtrl.create({
        message: 'Se necesita el correo',
        duration: 2000
      });
      toast.present();
    }else if(this.registroUser.password==""){
      const toast = await this.toastCtrl.create({
        message: 'Se necesita la contraseña',
        duration: 2000
      });
      toast.present();
    }else if(this.registroUser.nombre==""){
      const toast = await this.toastCtrl.create({
        message: 'Se necesita nombre',
        duration: 2000
      });
      toast.present();
    }else if(this.registroUser.password!=this.registroUser.confirm_password){
      const toast = await this.toastCtrl.create({
        message: 'Contraseña incorrecta',
        duration: 2000
      });
      toast.present();
    }else{ 
      let body = {
        email: this.registroUser.email,
        username: this.registroUser.nombre,
        password: this.registroUser.password,
        tipo_user : 'administrador',
        aksi:'register'
      };
      this.postPvdr.postData(body,'proses-api.php')
      .subscribe(async data => {
        var alertmsg = data.msg;
        if(data.success){
          const toast = await this.toastCtrl.create({
            message: 'Registro exitoso',
            duration: 2000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
        }
      });
    }
  }
  
}
