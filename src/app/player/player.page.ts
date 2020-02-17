import {Component, OnInit, ViewChild} from '@angular/core';
import {StreamingAudioOptions, StreamingMedia} from '@ionic-native/streaming-media/ngx';
import { Media, MediaObject} from '@ionic-native/media/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import {IonRange, NavController} from '@ionic/angular';


@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  public file: MediaObject;
  public isPlay: boolean;
  public currentIndexTrack: number;
  public mediaTimer: any;
  public playlist: string[] ;
  public tracks = [];
  public author = [];
  public currentTrackName = '';
  public currentAuthor = '';

  @ViewChild('range', {static : false}) range: IonRange;
  constructor(public media: Media, public navCtrl: NavController) {
    this.playlist = [ 'stressed_out.mp3' , 'music_sound_better_with_you.mp3', 'wonderwall.mp3', 'the_final_countdown.mp3' , 'lady.mp3' ];
    this.author = [ 'Tchami' , 'Stardust', 'Oasis', 'Europe' , 'Modjo' ];
    for ( let i = 0 ;  i < this.playlist.length; i++) {
      this.tracks.push({ src : this.playlist[i], author : this.author[i]});
    }
    this.playlist = this.playlist;
  }

  ngOnInit() {

  }
  public nextTrack() {
    if (this.currentIndexTrack > this.playlist.length - 2) {
      this.currentIndexTrack = 0;
    } else {
      this.currentIndexTrack++;
    }
    this.playAudio(this.currentIndexTrack);
  }
  public previousTrack() {
    if (this.currentIndexTrack === 0 ) {
      this.currentIndexTrack = this.playlist.length - 1;
    } else {
      this.currentIndexTrack--;
    }
    this.playAudio(this.currentIndexTrack);
  }
  public playAudio(index: number = 0) {
    if (this.currentIndexTrack >= 0) {
      this.file.stop();
      this.file.release();
    }
    this.file = this.media.create('http://195.83.128.21/~dev1906/ionic/' + this.tracks[index].src);
    this.currentIndexTrack = index;
    this.file.play();
    this.currentTrackName = this.tracks[index].src;
    this.currentAuthor = this.tracks[index].author;
    this.showProgress();
    this.isPlay = true;
  }
  public isPlaying() {
    return this.isPlay;
  }
  public pauseAudio() {
    if (this.isPlay) {
      this.file.pause();
      this.isPlay = false;
    }
  }
  public seekTime() {
    const newValue = +this.range.value;
    const duration = this.file.getDuration();
    this.file.seekTo((newValue * (duration / 100)) * 1000);
  }

  public showProgress() {
    this.file.getCurrentPosition().then((position) => {
      if ( this.mediaTimer < this.file.getDuration() ) {
          this.mediaTimer = (position / this.file.getDuration() * 100);
        } else {
      }
    });
    setTimeout(() => {
        this.showProgress();
    }
    , 1000);
  }
}
