import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'view', component: ViewQuizComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ViewQuizComponent,
    QuizCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
