import { MatIconModule } from '@angular/material/icon';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingOptionCardComponent } from './setting-option-card.component';
import { MatButtonModule } from '@angular/material/button';

describe('SettingOptionCardComponent', () => {
  let component: SettingOptionCardComponent;
  let fixture: ComponentFixture<SettingOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatIconModule,MatButtonModule],
      declarations: [ SettingOptionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
