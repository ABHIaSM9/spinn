import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import {LoginComponent,SignupComponent,OtpverifyComponent} from './pages';
import { SharedModule } from '../shared/shared.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, OtpverifyComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgOtpInputModule
  ]
})
export class AuthModule { }
