import {Observable, of} from 'rxjs';

const isDarkMode:boolean = false;

export class ThemeServiceMock{
  getThemeListener():Observable<boolean>{
    return of(isDarkMode);
  }
}
