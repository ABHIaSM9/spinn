import { AuthenticationService } from './../../../core/authentication/authentication.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  let authenticationService = jasmine.createSpyObj('AuthenticationService',['onSignUp']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports:[
        FormsModule,
        MatButtonModule,
        MatIconModule
      ],
      providers:[
        {
          provide: AuthenticationService,
          useValue: authenticationService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show isPasswordVisible is false initially',()=>{
    expect(component.isPasswordVisible).toBe(false);
  })

  it('should show isPasswordVisible is true when user click on visibility toggle icon',()=>{
    component.togglePasswordVisibility();
    expect(component.isPasswordVisible).toBe(true);
  })

  it('should signup when email and password will avaliable',()=>{
    component.onSubmit();
    setTimeout(()=>{
      component.signUpForm.setValue({email:'manish@gmail.com',password:'Manish@123'});
      console.log('formvalue',component.signUpForm);
      expect(component.signUpForm.value).toEqual({email:'manish@gmail.com',password:'Manish@123'});
    })
  })
  // it('should be invalid form true bydefault',()=>{
  //   component.onSubmit();
  //   expect(component.signUpForm.status).toBe('VALID')
  //   expect(component.signUpForm.touched).toBe(false);
  // })

  // it('should be call onSignup',()=>{
  //   expect
  //   component.onSubmit();
  //   spyOn(component.authService,'onSignUp');
  //   // expect(component.signUpForm.valid).toBe(true);
  //   expect(component.authService.onSignUp).toHaveBeenCalled();
  // })

});
