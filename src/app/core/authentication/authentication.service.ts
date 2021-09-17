import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthUser } from '../schema/AuthUser';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users:AuthUser[] = [];
  private userSubject = new Subject();
  
  constructor(private router: Router) { }

  onLogin(email:String,password:String){
    console.log(email, password);
    console.log('this.users',this.users);
    const user = this.users.find(u=>{
      return (email == u.email && password == u.password);
    });
    console.log('onLogin',user);
    user?this.userSubject.next(user):this.userSubject.next();
    user && this.router.navigate(['/quize']);
  }

  getUserListener(){
    return this.userSubject.asObservable();
  }

  onSignUp(email:String,password:String){
    this.users.push({email,password});
    console.log(this.users);
    this.router.navigate(['/auth/otp-verify']);

    // this.toastr.success('successfully Registered');
  }
}
