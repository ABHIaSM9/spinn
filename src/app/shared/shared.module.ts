import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
// import { NgxMatCircleCounterModule } from 'ngx-mat-circle-counter/src/lib/ngx-mat-circle-counter.module';

import {
  FooterComponent,HeaderComponent,
  SideNavComponent,
  AppMainLogoTitleComponent,
  BottomNavigationComponent,
  AdminNavHeaderComponent,

} from './layout';
import {
  QuestionDisplayBoxComponent,
  FileUplodeDialogComponent,
  FileUploadModelComponent,
  LoadingSpinnerComponent,
  CstBottomNavComponent,
  ProgressBarComponent
} from './components';
import { BottomNavModule } from 'ngx-bottom-nav';
import { CounterModule } from 'angular-circle-counter';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WebcamModule } from 'ngx-webcam';
import { FileUploadComponent } from './layout/file-upload/file-upload.component';
import { AvatarModule } from 'ngx-avatar';




const declareAndExportModules = [
    CstBottomNavComponent,
    FooterComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    AppMainLogoTitleComponent,
    SideNavComponent,
    BottomNavigationComponent,
    AdminNavHeaderComponent,
    FileUploadComponent,
    QuestionDisplayBoxComponent,
    FileUplodeDialogComponent,
    ProgressBarComponent
];



@NgModule({
  declarations: [
    ...declareAndExportModules,
    FileUploadModelComponent,
    ProgressBarComponent
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
    CounterModule,
    AvatarModule,

  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    BottomNavModule,
    CounterModule,
    CarouselModule,
    WebcamModule,
    AvatarModule,
    ...declareAndExportModules
  ]
})
export class SharedModule { }
