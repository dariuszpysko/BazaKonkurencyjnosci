import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DbService} from './db.service';
import { HttpModule  } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { AdvListComponent } from './adv-list/adv-list.component';
import { AdvDetailsComponent } from './adv-details/adv-details.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        SearchComponent,
        AdvListComponent,
        AdvDetailsComponent
    ],
    imports: [
        BrowserModule, HttpModule
    ],
    providers: [DbService],
    bootstrap: [AppComponent]
})
export class AppModule {}
