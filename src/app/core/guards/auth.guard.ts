import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  isAuth:boolean;

  constructor(private authService:AuthenticationService,private router:Router){
    this.onInitialLoad();
  }

  onInitialLoad(){
    this.isAuth = this.authService.getIsAuth();
    this.authService.getIsAuthListener().subscribe((isAuth:boolean)=>{
      this.isAuth = isAuth;
      console.log('auth gaurd auth', this.isAuth);
    })
    console.log('auth gaurd auth', this.isAuth);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.isAuth){
        console.log('isAuth',this.isAuth);
        this.router.navigate(['/auth/login']);
        return false;
      }
      return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('canDeactivate component',component);
      console.log('canDeactivate currentRoute',currentRoute);
      console.log('canDeactivate currentState',currentState)
      return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
