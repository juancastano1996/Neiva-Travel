import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-sanjuanero',
  templateUrl: 'sanjuanero.page.html',
  styleUrls: ['sanjuanero.page.scss']
})
export class SanjuaneroPage {
  
  mostrar = true;
  mostrar1= true;
  mostrar2 = true;
  mostrar3 = true;

  constructor(private youtube: YoutubeVideoPlayer) {}

  watch(watch){
    this.youtube.openVideo(watch);
  }

  watch1(watch1){
    this.youtube.openVideo(watch1);
  }

  cambiarTexto() {
    if(this.mostrar) {
      this.mostrar = false;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
    }else{
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
    }
  }
  cambiarTexto1() {
    if(this.mostrar1) {
      this.mostrar = true;
      this.mostrar1 = false;
      this.mostrar2 = true;
      this.mostrar3 = true;
    }else{
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
    }
  }
  cambiarTexto2() {
    if(this.mostrar1) {
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
    }else{
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
    }
  }
  cambiarTexto3() {
    if(this.mostrar2) {
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = false;
      this.mostrar3 = true;
    }else{
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
    }
  }
  cambiarTexto4() {
    if(this.mostrar2) {
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = false;
    }else{
      this.mostrar = true;
      this.mostrar1 = true;
      this.mostrar2 = true;
      this.mostrar3 = true;
    }
  }
}
