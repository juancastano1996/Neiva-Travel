import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-parapente',
  templateUrl: './parapente.page.html',
  styleUrls: ['./parapente.page.scss'],
})
export class ParapentePage implements OnInit {

  constructor(private youtube: YoutubeVideoPlayer) { }

  watch(watch){
    this.youtube.openVideo(watch);
  }

  ngOnInit() {
  }

}
