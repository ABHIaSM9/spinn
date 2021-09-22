import { ComponentFixture, TestBed, } from '@angular/core/testing';

import { LoginComponent } from './login.component';





describe('LoginComponent',()=>{
  let component:LoginComponent;
  let fixture:ComponentFixture<LoginComponent>;


  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ]
    })
  })
  
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isPasswordVisible should be false by default',()=>{
    const app =  fixture.debugElement.componentInstance;
    expect(app.isPasswordVisible).toEqual(false);
  })

  // it('isPasswordVisible should be true when user click on visibility icon',()=>{
  //   expect(component.isPasswordVisible).toBe(false);
  // })

})

