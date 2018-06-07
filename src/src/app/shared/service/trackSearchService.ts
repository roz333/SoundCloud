import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Track } from "../interfaces/track";
import { Observable } from "rxjs/internal/Observable";


// import { Observable } from 'rxjs/Observable';

// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Subject } from 'rxjs/Subject';



@Injectable()
export class TrackSearchService {

    private clientId: string = '1fb0d04a94f035059b0424154fd1b18c';


    constructor(private httpClient: HttpClient) {
    }
    search(keyword: string): Observable<any> {
        var uri = this.tracksSearchUri(keyword);
        return this.httpClient.get<string[]>(uri);
    }

    tracksSearchUri(keyword: string): string {
        return 'http://api.soundcloud.com/tracks?client_id=' + this.clientId + '&q=' + keyword;
    }

}
