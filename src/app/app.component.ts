import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { GiphyService } from "./services/giphy.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private term: string;
    private gifs: any = [];

    constructor(
        private giphy: GiphyService
    ) { }

    ngOnInit(): void {

    }

    search(term): void {

        this.term = term;

        if (this.term !== '') {
            this.giphy.grabSearch(this.term, 10);
        }
    }

}
