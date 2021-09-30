import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SettingComponent, ProfileComponent,SystemSettingComponent } from './pages';
import { SharedModule } from '../shared/shared.module';
import { SettingOptionCardComponent } from './pages/setting/setting-option-card/setting-option-card.component';
import { SystemSettingOptionCardComponent } from './pages/system-setting/system-setting-option-card/system-setting-option-card.component';
import { VideoCapturingComponent } from './pages/video-capturing/video-capturing.component';


@NgModule({
  declarations: [UserComponent, SettingComponent, ProfileComponent, SettingOptionCardComponent, SystemSettingComponent, SystemSettingOptionCardComponent, VideoCapturingComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
