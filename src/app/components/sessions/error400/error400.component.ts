import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error400',
  templateUrl: './error400.component.html',
  styleUrls: ['./error400.component.scss']
})
export class Error400Component {

  constructor(private router: Router) { }

  tryAgain(){
    this.router.navigate(['quiz']);
  }
}
