import { QuizService } from './../../../../core/services/quiz.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionListComponent } from './option-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';

describe('OptionListComponent', () => {
  let component: OptionListComponent;
  let fixture: ComponentFixture<OptionListComponent>;

  let quzeServiceSpy = jasmine.createSpyObj('QuizService',['getCorrectAnswerIndex','getSelectedOptionIndex','getIsOptionSelected','getIsCheckAnswer', 'setIsOptionSelected','.setSelectedOptionIndex']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ OptionListComponent ],
      providers:[
        {provider:QuizService,useValue:quzeServiceSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
