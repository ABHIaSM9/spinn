import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;
  const routerSpy = jasmine.createSpyObj('Router',['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[{provide:Router,useValue:routerSpy}]
    });
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
