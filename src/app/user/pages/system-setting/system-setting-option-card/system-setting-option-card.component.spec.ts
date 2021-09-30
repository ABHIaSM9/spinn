import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSettingOptionCardComponent } from './system-setting-option-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('SystemSettingOptionCardComponent', () => {
  let component: SystemSettingOptionCardComponent;
  let fixture: ComponentFixture<SystemSettingOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatSlideToggleModule,MatButtonModule,MatIconModule],
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
