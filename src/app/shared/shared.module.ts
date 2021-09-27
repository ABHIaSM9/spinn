import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CstBottomNavComponent } from './layout/cst-bottom-nav/cst-bottom-nav.component';
import { MaterialModule } from '../material/material.module';
// import { NgxMatCircleCounterModule } from 'ngx-mat-circle-counter/src/lib/ngx-mat-circle-counter.module';

import { 
  CstButtonComponent,
  LoadingSpinnerComponent,
  FooterComponent,HeaderComponent,
  SideNavComponent,
  AppMainLogoTitleComponent,
  BottomNavigationComponent
} from './layout';
import { BottomNavModule } from 'ngx-bottom-nav';
import { CounterModule } from 'angular-circle-counter';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WebcamModule } from 'ngx-webcam';







@NgModule({
  declarations: [
    CstButtonComponent,
    CstBottomNavComponent,
    FooterComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    AppMainLogoTitleComponent,
    SideNavComponent,
    BottomNavigationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    BottomNavModule,
    CarouselModule,
    WebcamModule,
    
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    CstButtonComponent,
    CstBottomNavComponent,
    FooterComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    AppMainLogoTitleComponent,
    SideNavComponent,
    BottomNavigationComponent,
    BottomNavModule,
    CounterModule,
    CarouselModule,
    WebcamModule,
  ]
})
export class SharedModule { }
