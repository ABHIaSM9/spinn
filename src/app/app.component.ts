import { ThemeService } from './core/services/theme.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  isDorkMode:boolean;
  private subscription:Subscription;
  constructor(private themeService:ThemeService){}

  ngOnInit(): void {
    this.isDorkMode = this.themeService.getIsDarkMode();
    this.subscription =  this.themeService.getThemeListener().subscribe((isDarkMode:boolean)=>{
      this.isDorkMode = isDarkMode;
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
