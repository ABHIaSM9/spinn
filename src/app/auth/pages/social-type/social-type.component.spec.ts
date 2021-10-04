import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTypeComponent } from './social-type.component';

describe('SocialTypeComponent', () => {
  let component: SocialTypeComponent;
  let fixture: ComponentFixture<SocialTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
