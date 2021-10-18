import { QuestionListComponent } from './pages/question-list/question-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuestionControllerComponent } from './pages/question-controller/question-controller.component';

const routes: Routes = [
  {path:'',component:AdminComponent,children:[
    {path:'',pathMatch:'full',component:DashboardComponent},
    {path:'add-game',component:AddGameComponent},
    {path:'controller',component:QuestionControllerComponent},
    {path:'question-list',component:QuestionListComponent},
    {path:'question-list/:id',component:QuestionControllerComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
