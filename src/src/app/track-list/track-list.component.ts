import { Component, OnInit } from '@angular/core';
import { TrackSearchService } from '../shared/service/trackSearchService';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  tracks: any;
  currentClickedTrack: any;
  flagTrackClicked: boolean;
  numberOfshownTrack: number;
  startshownTrack: number;
  endshownTrack: number;
  lastTrack: number;
  prevTrack: number;


  constructor(private trackSearchService: TrackSearchService) { }

  ngOnInit() {
    this.tracks = "";
    this.flagTrackClicked = false;
    this.numberOfshownTrack = 6;
    this.startshownTrack = 0;
    this.endshownTrack = this.numberOfshownTrack;
    this.lastTrack = this.endshownTrack;

  }

  searchTrack(searchInput) {
    console.log('searchInput', searchInput);
    this.getAllTracks(searchInput.value);
  }

  getAllTracks(searchTrack) {
    this.trackSearchService.search(searchTrack).subscribe(data => {
      this.tracks = data;
      console.log('tracks', this.tracks);

    });
  }

  imageContainer(clickedResult_track) {
    this.currentClickedTrack = clickedResult_track;
    this.flagTrackClicked = true;
  }
  public nextTracks(): void {
    this.startshownTrack = this.endshownTrack;
    this.endshownTrack = this.endshownTrack + this.numberOfshownTrack;
    this.lastTrack = this.endshownTrack;
    if (this.tracks.length < this.endshownTrack) {
      this.endshownTrack = this.tracks.length;
      this.startshownTrack = this.tracks.length - (this.endshownTrack - this.numberOfshownTrack);
    }
    console.log('start', this.startshownTrack);
    console.log('end', this.endshownTrack);
  }

  public prevTracks(): void {

    this.startshownTrack = this.lastTrack - this.startshownTrack - this.numberOfshownTrack;
    this.endshownTrack = this.lastTrack - this.numberOfshownTrack;


    console.log('start2', this.startshownTrack);
    console.log('end2', this.endshownTrack);
  }


}