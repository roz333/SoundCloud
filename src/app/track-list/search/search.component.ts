import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() notifyTrackInput: EventEmitter<string> = new EventEmitter();
  private inputValue: string;
  public tracksHistory: string[];
  public linkIndex: number;
  public clicked: boolean;

  constructor(private storage: LocalStorageService) {
  }

  ngOnInit() {
    this.tracksHistory = [];
    this.inputValue = "";
    this.clicked = false;
    if (this.storage.retrieve('tracksHistory')) {
      this.retrieveValue();
    }
  }

  searchTrack(trackNameInputValue: string) {
    this.notifyTrackInput.emit(trackNameInputValue);
    trackNameInputValue = " ";
  }
  onFocusMethod(trackNameInput: HTMLInputElement): void {
    trackNameInput.value = "";
  }


  inputValueChanges(inputValue: string): void {
    if (/\S/.test(inputValue)) {
      this.tracksHistory.unshift(inputValue);
      if (this.tracksHistory.length > 4) {
        this.tracksHistory = this.tracksHistory.slice(0, 5);
      }
      this.storage.store('tracksHistory', this.tracksHistory);
      this.retrieveValue();
      this.clicked = false;
      this.clickedLink(0);
    }
  }

  retrieveValue() {
    this.tracksHistory = this.storage.retrieve('tracksHistory');
  }

  clickedLink(index: number) {
    this.clicked = true;
    this.linkIndex = index;
  }
  trackByFn(index, item) {
    return item; // or item.id
  }

}