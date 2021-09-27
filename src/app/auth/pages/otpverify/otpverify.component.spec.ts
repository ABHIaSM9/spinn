import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpverifyComponent } from './otpverify.component';
import { Router } from '@angular/router';

describe('OtpverifyComponent', () => {
  let component: OtpverifyComponent;
  let fixture: ComponentFixture<OtpverifyComponent>;
  const routerSpy = jasmine.createSpyObj('Router',['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpverifyComponent ],
      imports:[RouterTestingModule],
      providers:[
        {provide:Router,useValue:routerSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
