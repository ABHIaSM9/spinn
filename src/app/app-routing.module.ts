import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, SignupComponent } from './auth';
import { AuthComponent } from './auth/auth.component';
import { OtpverifyComponent } from './auth/pages/otpverify/otpverify.component';
import { HomeComponent } from './home/home.component';
import { QuizeComponent } from './quize/quize.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:HomeComponent},
  {path:'',component:AuthComponent},
  {path:'quize',component:QuizeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
