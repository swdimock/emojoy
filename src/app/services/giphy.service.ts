import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {

    private slackApiKey = 'Xn4xT89btH8QI4qvem2rad4A7pYfgT0F';
    private searchTerm: string;
    private limitResults: 5;

    constructor(
        private http: HttpClient
    ) { }


    grabSearch(searchTerm: string, limit: any) {

        this.searchTerm = searchTerm;
        this.limitResults = limit;

        const request = 'http://api.giphy.com/v1/gifs/search?q=' + this.searchTerm +
            '&api_key=' + this.slackApiKey +
            '&limit=' + this.limitResults +
            '&offset=0&rating=G&lang=en';

        return this.http.get(request);
    }

}