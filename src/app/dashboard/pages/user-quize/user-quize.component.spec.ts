import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuizeComponent } from './user-quize.component';

describe('UserQuizeComponent', () => {
  let component: UserQuizeComponent;
  let fixture: ComponentFixture<UserQuizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
