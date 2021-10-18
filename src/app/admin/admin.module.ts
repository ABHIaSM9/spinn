import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GameDescriptionCardComponent } from './pages/dashboard/game-description-card/game-description-card.component';
import { AddGameComponent,DashboardComponent,QuestionControllerComponent,QuestionListComponent } from './pages';


@NgModule({
  declarations: [AdminComponent, AddGameComponent, QuestionControllerComponent, DashboardComponent, QuestionListComponent, GameDescriptionCardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
