import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TrackListComponent } from './track-list/track-list.component';
import { SearchComponent } from './track-list/search/search.component';
import { TrackCoverComponent } from './track-list/track-cover/track-cover.component';
import { TrackComponent } from 'src/app/track-list/track/track.component';
import { HttpClientModule } from '@angular/common/http';
import { TrackSearchService } from './shared/service/trackSearchService';
import { SafeUrlPipe } from './shared/pipes/safe-url.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TrackListComponent,
    SearchComponent,
    TrackComponent,
    TrackCoverComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

   ],
  providers: [TrackSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
