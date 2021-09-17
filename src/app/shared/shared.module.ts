

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CstBottomNavComponent } from './layout/cst-bottom-nav/cst-bottom-nav.component';
import { MaterialModule } from '../material/material.module';

import { 
  CstButtonComponent,
  LoadingSpinnerComponent,
  CstCircularborderButtonComponent,
  FooterComponent,HeaderComponent,
  SideNavComponent,
  AppMainLogoTitleComponent,
  BottomNavigationComponent
} from './layout';
import { NgBottomNavigationModule } from 'ng-bottom-navigation';
import { BottomNavModule } from 'ngx-bottom-nav';
import { CounterModule } from 'angular-circle-counter';
import { CarouselModule } from 'ngx-owl-carousel-o';





@NgModule({
  declarations: [
    CstButtonComponent,
    CstCircularborderButtonComponent,
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
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    BottomNavModule,
    CarouselModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    CstButtonComponent,
    CstBottomNavComponent,
    CstCircularborderButtonComponent,
    FooterComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    AppMainLogoTitleComponent,
    SideNavComponent,
    ReactiveFormsModule,
    BottomNavigationComponent,
    BottomNavModule,
    CounterModule,
    CarouselModule
  ]
})
export class SharedModule { }
