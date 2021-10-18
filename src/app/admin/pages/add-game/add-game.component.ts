import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadModelComponent } from 'src/app/components/file-upload-model/file-upload-model.component';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  @ViewChild('image',{static:true}) image;
  imageUrl;
  isFileSelected:boolean = false;
  file:File;
  dialogRef:any;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogRef = this.dialog.open(FileUploadModelComponent,{
      width:'500px'
    });
    this.dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.type == 'image'){
          const fileReader = new FileReader();
          fileReader.onload = () =>{
            this.image.nativeElement.src = fileReader.result;
            this.isFileSelected = true;
          }
          fileReader.readAsDataURL(result.data);
        }else if(result.type == 'image-url'){
          this.image.nativeElement.src = result.data;
          this.isFileSelected = true;
        }
      }
    })
  }
  onFile(event){
    console.log('files',event);
  }

  onChange(event){
    this.file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () =>{
      this.image.nativeElement.src = fileReader.result;
    }
    fileReader.readAsDataURL(this.file);
    console.log('event',event);
  }

  edit(){
    console.log('edit');
    this.openDialog();
  }


  remove(){
    console.log('remove');
    this.image.nativeElement.src = null;
    this.isFileSelected = false;
  }
}
