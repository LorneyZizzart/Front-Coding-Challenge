import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HandlError {
    constructor(private _router: Router){}

    of(error:HttpErrorResponse):Promise<boolean>{
        switch (error.status) {
            case 0: return this._router.navigate(['/sessions/0']); 
            case 400: return this._router.navigate(['/sessions/400']); 
            case 404: return this._router.navigate(['/sessions/400']);
            case 500: return this._router.navigate(['/sessions/400']);
            default:
                break;
        }
    }
}