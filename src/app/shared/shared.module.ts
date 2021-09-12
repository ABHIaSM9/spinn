import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CstButtonComponent, CstCircularborderButtonComponent,FooterComponent,HeaderComponent} from './layout';
import { CstBottomNavComponent } from './layout/cst-bottom-nav/cst-bottom-nav.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MaterialModule } from '../material/material.module';

const materials = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule
];


@NgModule({
  declarations: [
    CstButtonComponent,
    CstCircularborderButtonComponent,
    CstBottomNavComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    CstButtonComponent,
    CstBottomNavComponent,
    CstCircularborderButtonComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
