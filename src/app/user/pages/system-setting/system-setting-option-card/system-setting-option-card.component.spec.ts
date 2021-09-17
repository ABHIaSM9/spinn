import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSettingOptionCardComponent } from './system-setting-option-card.component';

describe('SystemSettingOptionCardComponent', () => {
  let component: SystemSettingOptionCardComponent;
  let fixture: ComponentFixture<SystemSettingOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemSettingOptionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSettingOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
