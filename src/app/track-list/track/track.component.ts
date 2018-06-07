import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent {

  @Input() currentTrack: any;
  @Output() notifyClickedTrack: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  clickedTrack(clicked_resultTrack :any) {
    this.notifyClickedTrack.emit(clicked_resultTrack);
  }

}