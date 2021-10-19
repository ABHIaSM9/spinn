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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';



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
  MatListModule,
  MatExpansionModule,
  MatMenuModule,
  MatSelectModule,
  MatDialogModule,
  DragDropModule,
  MatProgressBarModule,
  MatBadgeModule,
  MatChipsModule,
  MatCheckboxModule,
  MatTabsModule,
  MatTableModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule { }
