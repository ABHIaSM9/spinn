import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadModelComponent } from 'src/app/shared/components/file-uplode-dialog/file-upload-model/file-upload-model.component';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  @ViewChild('image',{static:true}) image;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {

  }
}
