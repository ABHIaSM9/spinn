import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

// import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';
import { QuizeComponent } from './quize/quize.component';
import { QuizeModule } from './quize/quize.module';
import { DashboardModule } from './dashboard/dashboard.module';





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
    FormsModule,
    CoreModule,
    HomeModule,
    // AuthModule,
    RouterModule,
    NgOtpInputModule,
    QuizeModule,
    DashboardModule,
    
  ],
  providers: [HomeRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
