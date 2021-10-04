import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import {LoginComponent,SignupComponent,OtpverifyComponent} from './pages';
import { SharedModule } from '../shared/shared.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { AuthComponent } from './auth.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';
import { BirthdayComponent } from './pages/birthday/birthday.component';
import { SocialTypeComponent } from './pages/social-type/social-type.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    OtpverifyComponent, 
    AuthComponent, UserTypeComponent, BirthdayComponent, SocialTypeComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgOtpInputModule
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    OtpverifyComponent,
    AuthComponent
  ]
})
export class AuthModule { }
