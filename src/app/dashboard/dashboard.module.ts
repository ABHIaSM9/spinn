import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ActivitiesComponent,UserActivityComponent} from './pages';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    DashboardComponent,
    UserActivityComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ChartsModule
  ],
  exports:[

  ]
})
export class DashboardModule { }
