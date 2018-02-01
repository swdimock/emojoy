import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EntrantsService } from "./services/entrants.service";
import { SlackService } from "./services/slack.service";
import { GiphyService } from "./services/giphy.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
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
