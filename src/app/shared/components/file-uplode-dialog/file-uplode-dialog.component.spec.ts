import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUplodeDialogComponent } from './file-uplode-dialog.component';

describe('FileUplodeDialogComponent', () => {
  let component: FileUplodeDialogComponent;
  let fixture: ComponentFixture<FileUplodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUplodeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUplodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
