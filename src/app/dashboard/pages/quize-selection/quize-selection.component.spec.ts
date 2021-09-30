import { MatStepperModule } from '@angular/material/stepper';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material/material.module';

import { QuizeSelectionComponent } from './quize-selection.component';

describe('QuizeSelectionComponent', () => {
  let component: QuizeSelectionComponent;
  let fixture: ComponentFixture<QuizeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatButtonModule,
        MatStepperModule
      ],
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
