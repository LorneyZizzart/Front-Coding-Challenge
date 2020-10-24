import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { Error0Component } from './components/sessions/error0/error0.component';
import { Error400Component } from './components/sessions/error400/error400.component';
import { Error500Component } from './components/sessions/error500/error500.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'quiz', component:QuizComponent},
  {path:'sessions/0', component:Error0Component},
  {path:'sessions/400', component:Error400Component},
  {path:'sessions/500', component:Error500Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
