import { AuthUser } from './../../../core/schema/AuthUser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from './../../../core/authentication/authentication.service';
import { ComponentFixture, fakeAsync, TestBed, tick, } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { delay} from 'rxjs/operators';
import { Observable, of, Subscription,pipe } from 'rxjs';
import { AuthenticationServiceMock } from 'src/tests/mocks/services/authentication-service.mock';


//describe and it is provided by jasmine

// describe is the group of tests
// 'it' is the test

//using xdescribe will exclude this testing component
//using fdescribe will test only this component




describe('LoginComponent',()=>{
  
  let component:LoginComponent;


  //fixture is the enviroment that wrap whole of this component.
  //it gives various methods to test this component.
  let fixture:ComponentFixture<LoginComponent>;


  let matSnackBar = jasmine.createSpyObj('MatSnackBar',['open'])
  // let authenticationService = jasmine.createSpyObj('AuthenticationService',['onLogin','getUserListener']);
  

  let authUser:AuthUser;

  //beforceEach run every time before this test.
  beforeEach(async ()=>{

    //if this component dependent on any service or other compoent or module,
    //then those service will configure here
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports:[
        FormsModule
      ],
      providers:[
        {
          provide: AuthenticationService,
          useClass: AuthenticationServiceMock
        },
        {
          provide:MatSnackBar,
          useValue: matSnackBar
        }
      ]
    })
  })
  
  beforeEach(() => {
    //assign fixture for our component.
    fixture = TestBed.createComponent(LoginComponent);
    //get the component using fixture.
    component = fixture.componentInstance;
    fixture.detectChanges();
    authUser = new AuthUser();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getUserLister will return Observable<AuthUser>',()=>{
    spyOn(component.authService,'getUserListener').and.returnValue(of({email:'manish@gmail.com',password:'Manish@123'}))
    component.ngOnInit();
    expect(component.authService.getUserListener).toHaveBeenCalled();
  });

  it('should show isPasswordVisible is true when user click on visibility toggle icon',()=>{
    component.togglePasswordVisibility();
    expect(component.isPasswordVisible).toBe(true);
  })

  // {email:'manish@gmail.com',password:'Manish@123'}
  it('should login when email and password will avaliable',()=>{
    component.onSubmit();
    setTimeout(()=>{
      component.form.setValue({email:'manish@gmail.com',password:'Manish@123'});
      console.log('formvalue',component.form);
      expect(component.form.value).toEqual({email:'manish@gmail.com',password:'Manish@123'});
    })
  })
})

