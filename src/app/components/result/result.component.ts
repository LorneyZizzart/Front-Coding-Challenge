import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '@shared';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  @Input() questions:Question[] = [];
  @Input() length:number;
  @Input() correct:number;
  @Output() go = new EventEmitter();

  constructor() { }
}
