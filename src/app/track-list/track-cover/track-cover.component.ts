import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-track-cover',
  templateUrl: './track-cover.component.html',
  styleUrls: ['./track-cover.component.scss']
})
export class TrackCoverComponent implements OnInit {

  public currentClickedTrack: any;
  public playSongflag: boolean;
  public uri: any;
  public rawUri: any;
  public imageloaded: boolean;

  @Input('currentClickedTrack')
  set currentClicked(trackObject: any) {
    this.currentClickedTrack = trackObject;
    this.rawUri = trackObject.uri;
    this.playSongflag = false;
    setTimeout(() => {
      this.uri = 'https://w.soundcloud.com/player/?url=' + this.rawUri + '&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    }, 0);  
  }

  constructor() {
    this.imgTimer();
   }

  ngOnInit() {
    this.uri = '';
    this.playSongflag = false;
    this.imageloaded = false;
  }

  imgTimer(): void {
    setTimeout(() => {
      console.log('timer');
      this.imageloaded = true;
    }, 2000);
  }

  changeValue(value: boolean): void {
    this.playSongflag = value;
  }

}



