import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

interface SearchResults {
  gifs: any;
}

@Injectable()
export class GiphyService {

    private slackApiKey: string = "Xn4xT89btH8QI4qvem2rad4A7pYfgT0F";
    private searchTerm: string = "";
    private limitResults: number = 5;
    private searchResult: any;

    constructor(
        private http: HttpClient
    ) { }


    grabSearch(searchTerm: string, limit: number): void {

        this.searchTerm = searchTerm;
        this.limitResults = limit;

        let searchString = "http://api.giphy.com/v1/gifs/search?q=" + this.searchTerm +
            "&api_key=" + this.slackApiKey +
            "&limit=" + this.limitResults;

        this.http.get<SearchResults>(searchString).subscribe(
            data => {
                console.log(data);
                this.searchResult = data['data'];
            },
            err => {
                console.log('Oops.  Screwed up.')
            }
        );

    }

}
