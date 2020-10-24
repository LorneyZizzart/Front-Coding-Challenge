import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '@shared';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() question:Question;
  @Input() count:number;
  @Input() length:number;
  @Output() option = new EventEmitter<string>();

  constructor() { }

  next(option:string){
    this.option.emit(option);
  }

}
