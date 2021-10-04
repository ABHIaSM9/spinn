import { SystemSettingComponent } from './pages/system-setting/system-setting.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent, ProfileComponent } from './pages';
import { AuthGuard } from '../core/guards/auth.guard';



const routes: Routes = [
  {path:'',component:UserComponent,children:[
    {path:'setting',component:SettingComponent},
    {path:'system-setting',component:SystemSettingComponent},
    {path:'',component:ProfileComponent,pathMatch:'full',canDeactivate:[AuthGuard]}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
