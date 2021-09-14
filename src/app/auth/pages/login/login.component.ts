import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('f',{static:true}) form:NgForm;
  isVisible = false;
  isLoading = false;
  constructor(private authService:AuthenticationService, private snackbar:MatSnackBar,private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.authService.getUserListener().subscribe(value=>{
      console.log('value get',value);
      if(value){
        this.isLoading = false;
        this.form.resetForm();
        this.snackbar.open("Successfull login",'dismiss',{duration:3000});
      }else{
        this.isLoading = false;
        this.form.resetForm();
        this.snackbar.open("User not found",'dismiss',{duration:3000});
      }
    })
  }

  toggleVisibility():void{
    this.isVisible = !this.isVisible;
  }
  
  onSubmit():void{
    this.isLoading = true;
    const value = this.form.value;
    setTimeout(()=>{
      this.authService.onLogin(value.email,value.password);
    },5000);
  }

}
