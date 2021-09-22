import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

// import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';
import { QuizModule } from './quiz/quiz.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BottomNavModule } from 'ngx-bottom-nav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    CoreModule,
    HomeModule,
    // AuthModule,
    RouterModule,
    NgOtpInputModule,
    QuizModule,
    DashboardModule,
    BottomNavModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HomeRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
