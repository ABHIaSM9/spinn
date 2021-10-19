import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode:boolean | any;
  private _theme = new Subject();

  constructor() {
    this.initialLoad();
  }


  private initialLoad(){
    this.isDarkMode =  this.getFromLocalStorage() ?? false;
    this.saveLocally(this.isDarkMode);
  }

  //locally save theme fuction
  private saveLocally(value:boolean | any){
    localStorage.setItem('isDarkMode',value);
  }

  //get from local storage function
  private getFromLocalStorage():boolean{
    const value = JSON.parse(localStorage.getItem('isDarkMode'));
    return (value as boolean);
  }

  onThemeChange(isDarkMode:boolean){
    this.isDarkMode = isDarkMode;
    this._theme.next(isDarkMode);
    this.saveLocally(isDarkMode);
  }

  getThemeListener(){
    return this._theme.asObservable();
  }

  getIsDarkMode(){
    return this.isDarkMode;
  }

}
