import { Question } from './question.interface';

export interface Result{
    response_code:number;
    results:Question[];
}