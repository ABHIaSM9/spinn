import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent, SignupComponent,OtpverifyComponent} from './pages';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"otp-verify",component:OtpverifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
