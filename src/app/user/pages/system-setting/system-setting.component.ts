import { ThemeService } from './../../../core/services/theme.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-system-setting',
  templateUrl: './system-setting.component.html',
  styleUrls: ['./system-setting.component.scss']
})
export class SystemSettingComponent implements OnInit,OnDestroy {
  isDarkMode:boolean;
  private subscription:Subscription;
  constructor(private themeService:ThemeService) { }

  
  ngOnInit(): void {
    this.isDarkMode = this.themeService.getIsDarkMode();
    this.subscription = this.themeService.getThemeListener().subscribe((isDarkMode:boolean)=>{
      this.isDarkMode = isDarkMode;
    });
  }

  onNightMode(event){
    this.themeService.onThemeChange(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
