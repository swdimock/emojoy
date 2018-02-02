import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { GiphyService } from './services/giphy.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private term: string;
    private loading: boolean;
    private gifResults = [];
    private selections = [];

    constructor(
        private giphy: GiphyService
    ) { }

    ngOnInit(): void {

    }

    search(term): void {

        this.loading = true;
        this.term = term;

        if (this.term !== '') {
            this.giphy.grabSearch(this.term, 5).subscribe( data => {

                // Loop through resulting data and assign what we need to an array
                // Realistically this should be mapped.  This is dirty.
                let responseProps = Object.keys(data.data);
                for (let prop of responseProps) {
                    this.gifResults.push({
                        id: data.data[prop].id,
                        mp4: data.data[prop].images.looping.mp4,
                        thumb: data.data[prop].images['480w_still'].url
                    });
                }
            });
        }
    }

    toggle(id: string) {
        if (!this.isSelected(id)) {
            this.selections.push(id);
        } else {
            let index = this.arrIndex(id);
            this.selections.splice(index, 1);
        }
    }

    isSelected(id: string) {
        return this.arrIndex(id) > -1
    }

    arrIndex(id: string) {
        return this.selections.indexOf(id);
    }
}
