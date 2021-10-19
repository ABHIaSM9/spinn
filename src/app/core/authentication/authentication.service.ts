import { environment } from './../../../environments/environment';
import { AuthUser } from './../schema/AuthUser';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuth:boolean = false;
  private users:AuthUser[] = [];
  private _isAuth = new Subject<boolean>();
  private _user = new Subject<AuthUser>();
  private timer:NodeJS.Timeout|undefined;
  private expireIn:number | any;

  constructor(private router: Router,private http:HttpClient) {
  }

  onInitialLoad(){
  }

  getIsAuth(){
    return this.isAuth;
  }
  getIsAuthListener(){
    return this._isAuth.asObservable();
  }

  getUserListener():Observable<AuthUser>{
    return this._user.asObservable();
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
      this._isAuth.next(this.isAuth);
      this._user.next(user);
      this.router.navigate(['/quiz']);
      // this.expireIn = new Date().getTime()+120000;
      this.expireIn = new Date().getTime()+(1000*60*60*24);
      this.saveAuthLocal(this.isAuth,this.expireIn);
      this.startTokenExpireTimer(this.expireIn);
    }else{
      this._user.next()
    }
  }


  onSignUp(email:String,password:String){
    //
    // this.http.post(`${environment.baseApiUrl}/user/sign-up`,{emailAddress:email,password}).subscribe(
    //   (value)=>{
    //     console.log(value);

    //     this.users.push({email,password});
    //     console.log(this.users);
    //     this.router.navigate(['/auth/otp-verify']);
    //   },
    //   (err)=>{
    //     console.log(err);
    //     if(err.status == 400){
    //       console.log('Bad Request')
    //     }
    //     if(err.status == 401){
    //       console.log('Unauthorized');
    //     }
    //     if(err.status == 403){
    //       console.log('Forbidden');
    //     }
    //     if(err.status == 404){
    //       console.log('NotFound');
    //     }
    //     if(err.status == 500){
    //       console.log('Internal server error');
    //     }
    //   }
    // );

    this.users.push({email,password});
    console.log(this.users);
    this.router.navigate(['/auth/otp-verify']);
  }

  onLogout(){
    this.isAuth = false;
    this._isAuth.next(this.isAuth);
    // this.saveAuthLocal(this.isAuth,this.expireIn);
    this.removeAuthLocal();
    this.router.navigate(['/auth/login']);
  }

  private saveAuthLocal(isAuth:boolean,expireIn:number){
    const authObj = {
      isAuth,
      expireIn
    }
    localStorage.setItem('auth',JSON.stringify(authObj));
  }

  getAuthLocal(){
    const authObj = JSON.parse((localStorage.getItem('auth') as any));
    if(authObj){
      this.isAuth = authObj.isAuth;
      this.expireIn = authObj.expireIn;
      this._isAuth.next(this.isAuth);
      this.saveAuthLocal(this.isAuth,this.expireIn);
    }
  }

  removeAuthLocal(){
    localStorage.clear();
  }

  autoLogin(){
    this.getAuthLocal();
    this.startTokenExpireTimer(this.expireIn);
  }

  startTokenExpireTimer(expireIn:number){
    this.timer = setInterval(()=>{
      if(new Date().getTime() > expireIn){
          this.onLogout();
          if(this.timer){
            clearInterval(this.timer);
          }
      }
    },1000);

  }




}
