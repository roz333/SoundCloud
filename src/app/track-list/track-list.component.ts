import { Component, OnInit } from '@angular/core';
import { TrackSearchService } from '../shared/service/trackSearchService';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  public tracks: any;
  public currentClickedTrack: any;
  public trackClickedFlag: boolean;
  private numberOfshownTracks: number;
  public startshownTracks: number;
  public endshownTracks: number;
  public imageloaded: boolean;




  constructor(private trackSearchService: TrackSearchService) { }

  ngOnInit() {
    this.tracks = "";
    this.trackClickedFlag = false;
    this.numberOfshownTracks = 6;
    this.imageloaded = false;
  }

  searchTrack(searchInputValue: string): void {
    this.getAllTracks(searchInputValue);

  }

  getAllTracks(searchTrack: string) {
    this.trackSearchService.search(searchTrack).subscribe(data => {
      this.tracks = data;
      this.resetVarsTostart();
    });
  }
  resetVarsTostart() {
    this.startshownTracks = 0;
    this.endshownTracks = this.numberOfshownTracks;
  }

  imageContainer(clickedResult_track: any): void {
    this.currentClickedTrack = clickedResult_track;
    this.trackClickedFlag = true;
  }
  public nextTracks(): void {
    this.startshownTracks = this.endshownTracks;
    this.endshownTracks = this.endshownTracks + this.numberOfshownTracks;
  }

  public prevTracks(): void {
    this.endshownTracks = this.startshownTracks;
    this.startshownTracks = this.startshownTracks - this.numberOfshownTracks;
  }

  trackByFn(index, item) {
    return item;
  }

}