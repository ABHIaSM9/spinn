import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm',{static:true}) signUpForm:NgForm;

  isPasswordVisible = false;
  constructor(public authService:AuthenticationService) { }

  ngOnInit(): void {
    console.log('signupForm',this.signUpForm);
  }

  togglePasswordVisibility():void{
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  onSubmit():void{
    const value = this.signUpForm.value;
    console.log(this.signUpForm);
    this.authService.onSignUp(value.email,value.password);
    this.signUpForm.resetForm()
  }

}
