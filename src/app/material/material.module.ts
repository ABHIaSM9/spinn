import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

const materials = [
  CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatRippleModule,
  MatGridListModule,
  MatSidenavModule,
  MatDividerModule,
  MatToolbarModule,
  MatGridListModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSlideToggleModule,
  MatListModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule { }
