import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ProvidersService } from './providers.service';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { timer } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/mapas',
      icon: 'home'
    },
    {
      title: 'Mi municipio',
      url: '/list',
      icon: 'mapa'
    },
    {
      title: 'Nuestra cultura',
      url: '/cultura',
      icon: 'culturas'
    },
    {
      title: 'Actividades',
      url: '/actividades',
      icon: '002-trekking'
    },
    {
      title: 'Hoteles',
      url: '/hoteles',
      icon: '020-hotel'
    },
    {
      title: 'Comidas y bebidas',
      url: '/comidas',
      icon: '010-restaurant'
    },
    {
      title: 'Galeria',
      url: '/galeria',
      icon: '013-photo'
    },
    {
      title: 'Neiva nocturna',
      url: '/nocturna',
      icon: '028-cocktail'
    },
    {
      title: 'Emergencias',
      url: '/emergencias',
      icon: 'hospital'
    },
    {
      title: 'Instructivo',
      url: '/instructivo',
      icon: 'pregunta'
    },
    {
      title: 'Login',
      url: '/ingreso',
      icon: 'login'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private provider: ProvidersService,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private storage : Storage,
    private router: Router
  ) {
    this.initializeApp();
  }

  showSplash = true;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(10000).subscribe(()=>this.showSplash = false)
      this.authService.getToken();
    });
   
  }

}
