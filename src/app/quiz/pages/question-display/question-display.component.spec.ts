import { MatToolbarModule } from '@angular/material/toolbar';
import { QuizService } from './../../../core/services/quiz.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDisplayComponent } from './question-display.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('QuestionDisplayComponent', () => {
  let component: QuestionDisplayComponent;
  let fixture: ComponentFixture<QuestionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        QuizService,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
      ],
      declarations: [ QuestionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
