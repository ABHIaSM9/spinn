import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDisplayBoxComponent } from './question-display-box.component';

describe('QuestionDisplayBoxComponent', () => {
  let component: QuestionDisplayBoxComponent;
  let fixture: ComponentFixture<QuestionDisplayBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionDisplayBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
