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

  constructor(private router: Router,private http:HttpClient) { }

  getUserListener():Observable<AuthUser>{
    console.log('getUserListener',this._user.asObservable());
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
      this._user.next(user);
      this.router.navigate(['/quiz']);
    }else{
      this._user.next()
    }
  }


  onSignUp(email:String,password:String){
    //
    this.http.post(`${environment.baseApiUrl}/user/sign-up`,{emailAddress:email,password}).subscribe(
      (value)=>{
        console.log(value);

        this.users.push({email,password});
        console.log(this.users);
        this.router.navigate(['/auth/otp-verify']);
      },
      (err)=>{
        console.log(err);
        if(err.status == 400){
          console.log('Bad Request')
        }
        if(err.status == 401){
          console.log('Unauthorized');
        }
        if(err.status == 403){
          console.log('Forbidden');
        }
        if(err.status == 404){
          console.log('NotFound');
        }
        if(err.status == 500){
          console.log('Internal server error');
        }
      }
    );


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
    return this._isAuth.asObservable();
  }

}
