import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  count: string;
  quizzes: Array<Quiz>=[]
  questions: Array<Question>=[]

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.count= params.get("count");
      console.log(this.count);
    })
  }
  RetryQuiz(){}
  // RetryQuiz(quizzes: Quiz){
  //   console.log("retrying back to Quiz",quizzes);
  //   this.router.navigate(["take",{name :quizzes.name}])
  // }
  BackToMainMenu(){
    console.log("back to main menu");
    this.router.navigate(["view"])
  }

}
