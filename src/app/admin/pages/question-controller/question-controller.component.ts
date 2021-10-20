import { FileUploadModelComponent } from 'src/app/shared/components/file-uplode-dialog/file-upload-model/file-upload-model.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-question-controller',
  templateUrl: './question-controller.component.html',
  styleUrls: ['./question-controller.component.scss']
})
export class QuestionControllerComponent implements OnInit {
  @ViewChild('image',{static:true}) image;
  imageUrl;
  isFileSelected:boolean = false;
  file:File;
  dialogRef:any;
  list:number[] = [1,2,3,4];
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {}

  openDialog(){
    this.dialogRef = this.dialog.open(FileUploadModelComponent,{
      width:'500px'
    });
    this.dialogRef.afterClosed().subscribe(result=>{
      console.log('result',result);
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

  onSave(){

  }
  onEdit(){

  }
  onDublicate(){

  }
  getFileData(event){
    console.log('fileData',event);
  }
}
