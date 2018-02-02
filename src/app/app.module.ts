import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EntrantsService } from "./services/entrants.service";
import { SlackService } from "./services/slack.service";
import { GiphyService } from "./services/giphy.service";
import { VoteComponent } from './vote/vote.component';
import { MineComponent } from './mine/mine.component';

@NgModule({
    declarations: [
        AppComponent,
        VoteComponent,
        MineComponent
    ],
    imports: [
        RouterModule.forRoot([
            {
                path: 'mine',
                component: MineComponent
            },
            {
                path: 'vote',
                component: VoteComponent
            },
            {
                path: '',
                redirectTo: '/',
                pathMatch: 'full'
            }
        ]),
        BrowserModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule
    ],
    providers: [
        EntrantsService,
        SlackService,
        GiphyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
