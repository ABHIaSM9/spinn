import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { FileUploadModelComponent } from './file-upload-model/file-upload-model.component';


@Component({
  selector: 'app-file-uplode-dialog',
  templateUrl: './file-uplode-dialog.component.html',
  styleUrls: ['./file-uplode-dialog.component.scss']
})
export class FileUplodeDialogComponent implements OnInit {
  @Input() width:number = 10;
  @Input() height:number = 10;
  @Input() dilogWidth:number = 500;
  @ViewChild('image',{static:false}) image:ElementRef;
  @ViewChild('videoEle',{static:false}) video:ElementRef;
  imageUrl;
  videoUrl;
  isFileSelected:boolean = false;
  isImage:boolean = false;
  file:File;
  dialogRef:any;
  @Output() fileData = new EventEmitter();

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogRef = this.dialog.open(FileUploadModelComponent,{
      width:`${this.dilogWidth}px`
    });
    this.dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.type == 'image'){
          console.log(result);
          this.isFileSelected = true;
          this.isImage = true;
          const fileReader = new FileReader();
          fileReader.onload = () =>{
            this.image.nativeElement.src = fileReader.result;
            this.fileData.emit(result);
          }
          fileReader.readAsDataURL(result.data);
        }else if(result.type == 'image-url'){
          this.isImage = true;
          this.isFileSelected = true;
          console.log(result);
          console.log(this.image);
          this.image.nativeElement.src = result.data;
          this.fileData.emit(result);
        }else if(result.type == 'video-url'){
          console.log('result',result);
          console.log('video Element',this.video);
          this.video.nativeElement.src = result.data;
          this.isFileSelected = true;
          this.isImage = false;
        }
      }
    })
  }

  edit(){
    console.log('edit');
    this.openDialog();
  }


  remove(){
    console.log('remove');
    if(this.video){
      this.video.nativeElement.src = null;
    }
    if(this.image){
      this.image.nativeElement.src = null;
    }
      this.isFileSelected = false;
      this.isImage = false;
  }

}
