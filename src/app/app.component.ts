import { ThemeService } from './core/services/theme.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  isDorkMode:boolean;
  private subscription:Subscription;
  constructor(private themeService:ThemeService,private authService:AuthenticationService){}

  ngOnInit(): void {
    this.isDorkMode = this.themeService.getIsDarkMode();
    this.subscription =  this.themeService.getThemeListener().subscribe((isDarkMode:boolean)=>{
      this.isDorkMode = isDarkMode;
    });
    this.authService.autoLogin();
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
