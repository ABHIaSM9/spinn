import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { UserQuizeComponent } from './user-quize.component';

describe('UserQuizeComponent', () => {
  let component: UserQuizeComponent;
  let fixture: ComponentFixture<UserQuizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[],
      declarations: [ UserQuizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
