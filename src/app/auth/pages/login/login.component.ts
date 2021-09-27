import { AuthUser } from './../../../core/schema/AuthUser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginform',{static:true}) form:NgForm;
  userListenerSubscription:Subscription;
  isPasswordVisible = false;
  isLoading = false;
  constructor(public authService:AuthenticationService, private snackbar:MatSnackBar) {
    console.log('subscribe',this.authService.getUserListener());
   }

  ngOnInit(): void {
    this.userListenerSubscription = this.authService.getUserListener()
    .subscribe((authUser:AuthUser)=>{
      if(authUser){
        this.isLoading = false;
        this.form.resetForm();
        this.snackbar.open("Successfull login",'dismiss',{duration:3000});
      }else{
        this.isLoading = false;
        this.form.resetForm();
        this.snackbar.open("User not found",'dismiss',{duration:3000});
      }
    });

  }



  
  togglePasswordVisibility():void{
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  onSubmit():void{
    this.isLoading = true;
    const value = this.form.value;
    setTimeout(()=>{
      this.authService.onLogin(value.email,value.password);
    },5000);
  }

}
