import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {

  quizzes: Array<Quiz>=[]
  questions: Array<Question>=[]

  constructor(private quizService:QuizService , private router: Router) { }

  ngOnInit(): void {
    this.quizService.fetchAllQuiz()
    .subscribe((res:Array<Quiz>)=>{
      console.log(res);
      this.quizzes =res;
    })
  }

  fetchAllQuestions(questions: Quiz){
    console.log("in take quiz",questions);
    this.router.navigate(["take",{name :questions.name}]);
    }
  }




