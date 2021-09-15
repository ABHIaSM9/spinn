import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserActivityComponent,UserQuizeComponent,QuizeSelectionComponent, ActivitiesComponent } from './pages';

const routes: Routes = [
  // {path:'',pathMatch:'full',redirectTo:'user-activity'},
  {path:'',component:DashboardComponent,children:[
    {path:'',pathMatch:'full',component:UserActivityComponent},
    {path:'activities',component:ActivitiesComponent},
    {path:'user-quize',component:UserQuizeComponent},
    {path:'quize-selection',component:QuizeSelectionComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
