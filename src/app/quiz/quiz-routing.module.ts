import { QuizComponent } from './quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionDisplayComponent } from './pages';
import { CongratsComponent } from './pages/congrats/congrats.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:QuizComponent},
  {path:'question-display',component:QuestionDisplayComponent},
  {path:'congrats',component:CongratsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
