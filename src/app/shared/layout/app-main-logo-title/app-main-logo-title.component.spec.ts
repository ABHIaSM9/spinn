import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainLogoTitleComponent } from './app-main-logo-title.component';

describe('AppMainLogoTitleComponent', () => {
  let component: AppMainLogoTitleComponent;
  let fixture: ComponentFixture<AppMainLogoTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMainLogoTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainLogoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
