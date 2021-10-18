import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload-model',
  templateUrl: './file-upload-model.component.html',
  styleUrls: ['./file-upload-model.component.scss']
})
export class FileUploadModelComponent implements OnInit {

  @ViewChild('urlInput',{static:true}) urlInput:ElementRef;
  constructor(public matDialoagRef:MatDialogRef<FileUploadModelComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  onImageInput(event){
    console.log(event);
    this.matDialoagRef.close( {type:'image',data:event.target.files[0]});
  }
  onUrlInput(){
    this.matDialoagRef.close({type:'image-url',data:this.urlInput.nativeElement.value});
  }

  onVideoInput(event){

    this.matDialoagRef.close({type:'video',data:event.target.files[0]});
  }
  onVideoUrl(){
    this.matDialoagRef.close({type:'video-url',data:this.urlInput.nativeElement.value});
  }

}
