import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isVisible = false;
  constructor(private authService:AuthenticationService, private snackbar:MatSnackBar,private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.authService.getUserListener().subscribe(value=>{
      value?
      this.snackbar.open("Successfull login",'dismiss',{duration:3000}):
      this.snackbar.open("User not found",'dismiss',{duration:3000});
    })
  }

  toggleVisibility():void{
    this.isVisible = !this.isVisible;
  }
  
  onReset():void{

  }

  onSubmit(ngform:NgForm):void{
    const value = ngform.form.value;
    console.log(ngform);
    this.authService.onLogin(value.email,value.password);
  }


}
