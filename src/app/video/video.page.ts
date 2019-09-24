import { Component, OnInit } from '@angular/core';
import { VideoPlayer,VideoOptions } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  videoOptions: VideoOptions;
  videoUrl: string;

  constructor(private videoPlayer: VideoPlayer) { }

  ngOnInit() {
  }

  async playVideo(){
    try {
      this.videoOptions={
        volume: 0.7,
      }
      this.videoUrl = "https://www.youtube.com/watch?v=o9fTkygleuY"
      this.videoPlayer.play(this.videoUrl, this.videoOptions)
    } catch (e) 
    {
      console.error(e);
    }
  }

}
