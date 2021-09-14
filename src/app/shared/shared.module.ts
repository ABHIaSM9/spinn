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
  AppMainLogoTitleComponent
} from './layout';




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

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
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
    ReactiveFormsModule
  ]
})
export class SharedModule { }
