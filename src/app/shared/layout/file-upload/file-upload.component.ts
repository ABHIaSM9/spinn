import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild, ElementRef, Input } from '@angular/core';


const videoMimeType = {
  'video/mp4':'video/mp4',
  'video/mpeg':'video/mpeg',
  'video/ogg':'video/ogg',
  'video/quicktime':'video/quicktime',
  'video/webm':'video/webm',
};
const imageMimeType = {
  'image/gif':'image/gif',
  'image/ief':'image/ief',
  'image/jpeg':'image/jpeg',
  'image/jpg':'image/jpg',
  'image/jpe':'image/jpe',
  'image/svg':'image/svg',
}
const audioMimeType = {
  'audio/basic':'audio/basic',
  'audio/mpeg':'audio/mpeg',
  'audio/x-wav':'audio/x-wav'
}



// const videoMimeType = [
//   'video/mp4',
//   'video/mpeg',
//   'video/ogg',
//   'video/quicktime',
//   'video/webm',
// ];
// const imageMimeType = [
//   'image/gif',
//   'image/ief',
//   'image/jpeg',
//   'image/jpg',
//   'image/jpe',
//   'image/svg',
// ]
// const audioMimeType = [
//   'audio/basic',
//   'audio/mpeg',
//   'audio/x-wav'
// ]

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  isFileOver:boolean = false;
  files:File[];
  isSelected:boolean = false;
  @ViewChild('urlInput',{static:true}) urlInput:ElementRef;
  @ViewChild('image',{static:true}) image:ElementRef;
  // @ViewChild('video',{static:true}) video:ElementRef;
  imageElement:any;
  urlInputElement:any;
  // videoElement:any;

  @Output() onFile = new EventEmitter();
  @Output() onVideo = new EventEmitter();
  @Output() onImage = new EventEmitter();
  @Output() onUrl = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.imageElement = this.image.nativeElement;
    this.urlInputElement = this.urlInput.nativeElement;
    // this.videoElement = this.video.nativeElement;
  }

  // checkMimeTypeAndEmit(){
  //   if(videoMimeType[]){

  //   }
  // }

  @HostListener('drop',['$event'])
  dropEvent(event){
    event.preventDefault();
    this.isFileOver = false;
    console.log('dropEvent',event.dataTransfer.files[0].progress);
    console.log('dropEvent',event.dataTransfer.files);
    this.files = event.dataTransfer.files;
    this.onFile.emit(this.files);
  }

  @HostListener('dragover',['$event'])
  dragOverEvent(event){
    event.preventDefault();
    if(!this.isFileOver){
      this.isFileOver = true;
    }
    event.stopPropagation();
    console.log('dragOver');
  }

  @HostListener('dragenter',['$event'])
  dragEnterEvent(event){
    event.preventDefault();
    event.stopPropagation();
    console.log('dragEnter');
  }

  @HostListener('dragleave',['$event'])
  dragLeave(event){
    event.preventDefault();
    event.stopPropagation();
    console.log('dragleave');
  }

  onVideoInput(event){
    console.log('onVideoInput',event.target.files[0]);
    this.onVideo.emit(event.target.files[0]);
  }
  onImageInput(event){
    console.log('onImageInput',event.target.files[0]);
    this.onImage.emit(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = ()=>{
      console.log('event',reader.result);
      this.isSelected=true;
      this.imageElement.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  onChangeImageUrl(){
    try{
      const url:string = this.urlInputElement.value;
      if(url != ''){
        console.log('url',url);
        this.imageElement.src = url;
        this.isSelected = true;
      }
    }catch(err){
      console.log('err',err);
    }
  }
  // onChangeVideoUrl(event){
  //   const url = event.target.value;
  //   console.log('url',url);
  //   // this.onUrl.emit(url);
  //   this.video.nativeElement.src = url;
  // }

  reset(){
    this.urlInputElement.value ='';
    this.imageElement.src = undefined;
    this.isSelected = false;
  }

}
