import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizeRoutingModule } from './quize-routing.module';
import { QuizeComponent } from './quize.component';
import { SharedModule } from '../shared/shared.module';
import { QuestionDisplayComponent } from './pages';
import { OptionCardComponent} from './pages/question-display/option-card/option-card.component';
import { OptionListComponent } from './pages/question-display/option-list/option-list.component';
import { CongratsComponent } from './pages/congrats/congrats.component';


@NgModule({
  declarations: [QuizeComponent, QuestionDisplayComponent, OptionCardComponent, OptionListComponent, CongratsComponent],
  imports: [
    CommonModule,
    QuizeRoutingModule,
    SharedModule
  ]
})
export class QuizeModule { }
