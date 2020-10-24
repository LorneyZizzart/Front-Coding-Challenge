import { Component, OnInit } from '@angular/core';
import { HandlError, Question, QuestionService } from '@shared';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions:Question[] = [];
  question:Question;
  corrects:Question[] = [];
  count:number;

  constructor(private _questionService:QuestionService, private _handlError:HandlError) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.corrects = [];
    this.count = 0;
    this.questions = [];
    this._questionService.getQuestions().subscribe((data) => {
      for (let index = 0; index < data.results.length; index++) {
        data.results[index].id = index;
        data.results[index].color = "badge-danger",
        data.results[index].icon = "fa-minus";
        this.questions.push(data.results[index]);
      }
      this.question = this.questions[this.count];
    }, error =>this._handlError.of(error));
  }

  next(option:string){
    if(this.question.correct_answer === option){
      this.corrects.push(this.question);
      for(let ques of this.questions){
        if(ques.id === this.question.id){
          ques.color = "badge-success";
          ques.icon = "fa-plus";
        }
      } 
    }
    this.count ++;
    this.question = this.questions[this.count];
  }
}