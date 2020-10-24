import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error0',
  templateUrl: './error0.component.html',
  styleUrls: ['./error0.component.scss']
})
export class Error0Component {

  constructor(private router: Router) { }

  tryAgain(){
    this.router.navigate(['quiz']);
  }
}
