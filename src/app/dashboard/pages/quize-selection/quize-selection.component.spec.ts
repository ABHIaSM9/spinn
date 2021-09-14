import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizeSelectionComponent } from './quize-selection.component';

describe('QuizeSelectionComponent', () => {
  let component: QuizeSelectionComponent;
  let fixture: ComponentFixture<QuizeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizeSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
