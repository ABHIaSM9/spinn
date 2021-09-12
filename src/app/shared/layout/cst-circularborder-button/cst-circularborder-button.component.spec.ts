import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstCircularborderButtonComponent } from './cst-circularborder-button.component';

describe('CstCircularborderButtonComponent', () => {
  let component: CstCircularborderButtonComponent;
  let fixture: ComponentFixture<CstCircularborderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstCircularborderButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CstCircularborderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
