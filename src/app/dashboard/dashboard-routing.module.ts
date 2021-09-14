import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserActivityComponent,UserQuizeComponent,QuizeSelectionComponent, ActivitiesComponent } from './pages';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'user-activity'},
  {path:'user-activity',component:UserActivityComponent},
  {path:'activities',component:ActivitiesComponent},
  {path:'user-quize',component:UserQuizeComponent},
  {path:'quize-selection',component:QuizeSelectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
