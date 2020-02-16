import { Component, OnInit } from '@angular/core';
import {StreamingAudioOptions, StreamingMedia} from '@ionic-native/streaming-media/ngx';
import { Media, MediaObject} from '@ionic-native/media/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';


@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  public file: MediaObject;
  constructor(public media: Media,private mediaCapture: MediaCapture) {
  }

  ngOnInit() {

  }
  public mediaCapture() {
    let options: CaptureImageOptions = { limit: 3 };
    this.mediaCapture.captureImage(options)
        .then(
            (data: MediaFile[]) => console.log(data),
            (err: CaptureError) => console.error(err)
        );
  }

  public playAudio() {
    this.file = this.media.create('http://195.83.128.21/~dev1906/ionic/musicsoundbetterwithyou.mp3');
    this.file.play();
    console.log('play');
  }
  public stopAudio() {
    this.file.stop();
  }
}
