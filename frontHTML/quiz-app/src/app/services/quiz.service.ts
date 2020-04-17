import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8011/api/quiz/'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  fetchAllQuiz(){
    return this.http.get(baseUrl);
  }

  fetchAllQuestions(id: number){
      console.log("fetch all questions works !");
  }
}
