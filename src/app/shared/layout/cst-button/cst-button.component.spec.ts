import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstButtonComponent } from './cst-button.component';

describe('CstButtonComponent', () => {
  let component: CstButtonComponent;
  let fixture: ComponentFixture<CstButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CstButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
