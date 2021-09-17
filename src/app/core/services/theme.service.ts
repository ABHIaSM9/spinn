import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode;
  private themeSubject = new Subject();

  constructor() { 
    this.initialLoad();
  }


  private initialLoad(){
    this.isDarkMode =  this.getFromLocalStorage() ?? false; 
    this.saveLocally(this.isDarkMode);
  }

  //locally save theme fuction
  private saveLocally(value){
    localStorage.setItem('isDarkMode',value);
  }

  //get from local storage function
  private getFromLocalStorage():boolean{
    const value = JSON.parse(localStorage.getItem('isDarkMode'));
    return (value as boolean);
  }

  onThemeChange(isDarkMode:boolean){
    this.isDarkMode = isDarkMode;
    this.themeSubject.next(isDarkMode);
    this.saveLocally(isDarkMode);
  }

  getThemeListener(){
    return this.themeSubject.asObservable();
  }

  getIsDarkMode(){
    return this.isDarkMode;
  }

}
