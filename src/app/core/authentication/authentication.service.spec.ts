import { AuthUser } from './../schema/AuthUser';
import { Observable, Subject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

describe('AuthenticationService', () => {

  const routerSpy = jasmine.createSpyObj('Router',['navigate'])
  let service: AuthenticationService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[
        {provide:Router,useValue:routerSpy}
      ]
    });
    service = TestBed.inject(AuthenticationService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('getUserListener',(done:DoneFn) =>{
  //   service.getUserListener().subscribe(value=>{
  //     expect(value).toEqual({email:'manish@gmail.com',password:'Manish@123'});
  //     done();
  //   })
  // })
});
