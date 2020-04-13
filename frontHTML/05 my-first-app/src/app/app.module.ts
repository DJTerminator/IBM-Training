import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './date.component';
import { MsgComponent } from './msg.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CardComponent } from './components/card/card.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { SentenceCasePipe } from './pipes/sentence-case.pipe';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { CountryComponent } from './components/country/country.component';
import { CityComponent } from './components/city/city.component';

@NgModule({
  declarations: [
    AppComponent,DateComponent,MsgComponent, BadgeComponent, CardComponent, JumbotronComponent, SearchPipe, SentenceCasePipe, FirstComponent, SecondComponent, CountryComponent, CityComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
