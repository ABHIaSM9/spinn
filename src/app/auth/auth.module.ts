import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import {LoginComponent,SignupComponent,OtpverifyComponent} from './pages';
import { SharedModule } from '../shared/shared.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { AuthComponent } from './auth.component';
import { WelcomeDialogComponent } from './pages/welcome-dialog/welcome-dialog.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    OtpverifyComponent,
    AuthComponent,
    WelcomeDialogComponent
  ],
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
