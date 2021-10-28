import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadModelComponent } from './file-upload-model.component';

describe('FileUploadModelComponent', () => {
  let component: FileUploadModelComponent;
  let fixture: ComponentFixture<FileUploadModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadModelComponent ],
      providers:[
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ],
      imports:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
