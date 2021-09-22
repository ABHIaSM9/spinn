import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isPasswordVisible = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility():void{
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  
  onSubmit(ngform:NgForm):void{
    const value = ngform.form.value;
    console.log(ngform.form);
    this.authService.onSignUp(value.email,value.password);
    ngform.resetForm();
  }

}
