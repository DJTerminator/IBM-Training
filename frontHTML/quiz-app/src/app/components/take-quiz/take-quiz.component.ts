import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class  TakeQuizComponent implements OnInit {



  currentQuestion: any;
  options: Array<any> = [];
  quizName: string;
  questions: Array<Question> = [];
  index: number = 0;
  length: any;
  isLastQuestion: boolean = false;
  isFirstQuestion: boolean = false;
  ans: Array<any> = [];
  count: number = 0;

  constructor(private route :ActivatedRoute,
              private router: Router,
              private quizService: QuizService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      // console.log('***', params.get('name'));
      this.quizName = params.get("name");
      // console.log(this.quizName);
    })

    this.quizService.fetchSingleQuestion(this.quizName).subscribe((res:any)=>
    {
      this.questions = res.questions;
      this.length = this.questions.length;
      // console.log("questions", this.questions);
      this.currentQuestion = this.questions[this.index];
      console.log("current question", this.currentQuestion);
      this.options = this.currentQuestion.options;
      // console.log("current option", this.options);
      // console.log("length of question", this.length);
      this.isFirstQuestion = true;
    })
  }

  nextQuestion() {
    if (this.index < this.length) {
      ++this.index;
      if(this.index>0){
        this.isFirstQuestion=false;
        console.log("from next",this.isFirstQuestion);
      }

      console.log(this.index);
      this.currentQuestion = this.questions[this.index];
      this.options = this.currentQuestion.options;
      this.isLastQuestion = false;
      //  console.log("last question",this.isLastQuestion);
      if (this.index == this.length - 1) {
        this.isLastQuestion = true;
        // console.log(this.isLastQuestion);
      }
    }

  }
   previousQuestion() {
    if (this.index > 0) {
      --this.index;
      if(this.index<this.length){
        this.isLastQuestion=false;
      }
      console.log(this.index);
      this.currentQuestion = this.questions[this.index];
      this.options = this.currentQuestion.options;
      this.isFirstQuestion = false;
      // console.log("first question", this.isFirstQuestion);
      if (this.index == 0) {
        this.isFirstQuestion = true;
        // console.log("first question", this.isFirstQuestion);
      }
    }
  }
  calculate(answer: boolean) {
    this.ans[this.index]= answer;
    console.log(this.ans);
  }
  // finalResult() {
  // }
  viewResult(){
    this.ans.forEach(i => {
      if (i == true) {
        this.count++;
      }
    });
    console.log("result", this.count);
    this.router.navigate(["rs",{count:this.count}]);
  }
}

