import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-track-cover',
  templateUrl: './track-cover.component.html',
  styleUrls: ['./track-cover.component.scss']
})
export class TrackCoverComponent implements OnInit {

  public currentClickedTrack: any;
  public playSongflag: boolean;
  public trackId: any;
  public uri: any;
  public rawUri: any;
  public url: string;

  @Input('currentClickedTrack')
  set currentClicked(trackObject: any) {
    this.currentClickedTrack = trackObject;
    this.rawUri = trackObject.uri;
    this.uri = 'https://w.soundcloud.com/player/?url=' + this.rawUri + '&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    console.log('uri', this.uri);
  }

  constructor() {
    this.uri = '';
    this.playSongflag = false;
    this.trackId = 0;
  }


  ngOnInit() {
    // this.trackId = this.currentClickedTrack.id;


  }
}



