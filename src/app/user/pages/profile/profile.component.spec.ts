import { MatExpansionModule } from '@angular/material/expansion';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports:[FormsModule,ReactiveFormsModule,MatButtonModule,MatIconModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should form contain blank fields initially',()=>{
    component.ngOnInit();
    expect(component.profileForm.value).toEqual({firstName:'',lastName:'',displayName:'',aboutMe:''});
  })
  it('should form contain data after before submit',()=>{
    component.onSubmit();
    component.profileForm.setValue({firstName:'kapil',lastName:'sharma',displayName:'kapil@sharma',aboutMe:'alsdjf asldf lasd fl salfdasjdlf salfjlsdfsjafl sadfj'});
    expect(component.profileForm.value).toEqual({firstName:'kapil',lastName:'sharma',displayName:'kapil@sharma',aboutMe:'alsdjf asldf lasd fl salfdasjdlf salfjlsdfsjafl sadfj'});
  })
  // it('should login when email and password will avaliable',()=>{
  //   component.onSubmit();
  //   setTimeout(()=>{
  //     component.form.setValue({email:'manish@gmail.com',password:'Manish@123'});s
  //     console.log('formvalue',component.form);
  //     expect(component.form.value).toEqual({email:'manish@gmail.com',password:'Manish@123'});
  //   })
  // })
});
