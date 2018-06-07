import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input() currentTrack: any;

  @Output() notifyClickedTrack: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

    console.log('currentTrack', this.currentTrack);
  }

  clickedTrack(clicked_resultTrack){
    this.notifyClickedTrack.emit(clicked_resultTrack);
  }

}
