import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { SharedModule } from '../shared/shared.module';
import { QuestionDisplayComponent } from './pages';
import { OptionCardComponent} from './pages/question-display/option-card/option-card.component';
import { OptionListComponent } from './pages/question-display/option-list/option-list.component';
import { CongratsComponent } from './pages/congrats/congrats.component';


@NgModule({
  declarations: [QuizComponent, QuestionDisplayComponent, OptionCardComponent, OptionListComponent, CongratsComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule
  ]
})
export class QuizModule { }
