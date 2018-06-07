import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() notifyTrackInput: EventEmitter<any> = new EventEmitter();
  inputValue: string;

  constructor() {
    this.inputValue = "";
  }

  ngOnInit() { }

  // searchTrack(trackName: HTMLInputElement): void {
  //   trackName.value = "";
  // }

  searchTrack(trackNameInput: HTMLInputElement) {
    this.notifyTrackInput.emit(trackNameInput);
  }

}