import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadModelComponent } from './file-upload-model.component';

fdescribe('FileUploadModelComponent', () => {
  let component: FileUploadModelComponent;
  let fixture: ComponentFixture<FileUploadModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadModelComponent ],
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
