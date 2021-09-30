import { AuthUser } from './../schema/AuthUser';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuth:boolean = false;
  private users:AuthUser[] = [];
  private isAuthSubject = new Subject<boolean>();
  private userSubject = new Subject<AuthUser>();

  constructor(private router: Router) { }

  getUserListener():Observable<AuthUser>{
    console.log('getUserListener',this.userSubject.asObservable());
    return this.userSubject.asObservable();
  }

  onLogin(email:String,password:String){
    console.log(email, password);
    console.log('this.users',this.users);
    const user = this.users.find(u=>{
      return (email == u.email && password == u.password);
    });
    console.log('onLogin',user);
    if(user){
      this.isAuth = true;
      this.userSubject.next(user);
      this.router.navigate(['/quiz']);
    }else{
      this.userSubject.next()
    }
    // user?this.userSubject.next(user):this.userSubject.next();
    // user && this.router.navigate(['/quize']);
  }


  onSignUp(email:String,password:String){
    this.users.push({email,password});
    console.log(this.users);
    this.router.navigate(['/auth/otp-verify']);
  }

  onLogout(){
    this.isAuth = false;
    console.log('logout',this.isAuth);
  }

  getIsAuth(){
    return this.isAuth;
  }

  getIsAuthListener(){
    return this.isAuthSubject.asObservable();
  }

}
