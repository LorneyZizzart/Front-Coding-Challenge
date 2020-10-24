import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '@shared/interfaces/result.interface';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    _url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

    constructor(private _http:HttpClient){}

    getQuestions():Observable<Result>{
        return this._http.get<any>(this._url);
    }
}