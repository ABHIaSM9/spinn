import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { CstBottomNavComponent } from './cst-bottom-nav.component';

describe('CstBottomNavComponent', () => {
  let component: CstBottomNavComponent;
  let fixture: ComponentFixture<CstBottomNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatIconModule],
      declarations: [ CstBottomNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CstBottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
