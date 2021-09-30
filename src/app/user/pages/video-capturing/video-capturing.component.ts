import { Component, OnInit, ViewChild, ElementRef, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoRecordingService } from 'src/app/core/services/video-recording.service';


const videoConstraints:MediaStreamConstraints = {
  video: {
    facingMode:'user',
    width:1366,
    height:768,
    frameRate:60
  },
  audio:{
    echoCancellation:{
      exact:true,
    },
  }
};

interface RecordedVideoOutput{
  blob: Blob,
  url: any,
  title: string
}

@Component({
  selector: 'app-video-capturing',
  templateUrl: './video-capturing.component.html',
  styleUrls: ['./video-capturing.component.scss']
})
export class VideoCapturingComponent implements OnInit {
  @ViewChild('videoElement',{static:true}) videoElement:ElementRef;
  @ViewChild('videoRecordedElement',{static:true}) videoElement2:ElementRef;

  downloadedMedia;
  video:HTMLVideoElement;
  videoElementForRecordedMedia:HTMLVideoElement;
  isVideoRecording = false;
  videoBlob:Blob;
  videoName:string;
  videoBlobUrl:any;


  constructor(private videoRecordingService:VideoRecordingService, private sanitaizer:DomSanitizer) { }

  ngOnInit(): void {
    this.video = this.videoElement.nativeElement;
    this.videoElementForRecordedMedia = this.videoElement2.nativeElement;
    this.videoRecordingService.getRecordUrlListener().subscribe(recordUrl=>{
      console.log('recorded url -->',recordUrl);
    });

    this.videoRecordingService.getRecordedListener().subscribe((recordedData:RecordedVideoOutput)=>{
      if(recordedData){
        console.log('blob --->',recordedData);
        this.videoBlob = recordedData.blob;
        this.videoName = recordedData.title;
        this.videoBlobUrl = recordedData.url;

        console.log('video BlobUrl',this.videoBlobUrl);
        this.videoElementForRecordedMedia.src = this.videoBlobUrl;
      }
    })
    this.videoRecordingService.getStreamListener().subscribe(stream=>{
      console.log('stream',stream);
    })
  }


  startVideoRecording(){
    if(!this.isVideoRecording){
      this.video.controls = false;
      this.isVideoRecording = true;
      this.videoRecordingService.startRecording(videoConstraints)
      .then(stream=>{
        this.video.srcObject = stream;
        this.video.play();
      })
      .catch(err => {
        console.log('error-------->',err);
      })
    }
  }

  stopVideoRecording(){
    console.log('stop Recording');
    this.videoRecordingService.stopRecording();
    this.video.srcObject = null;
    this.isVideoRecording = false;
    this.video.controls = true;
  }

  downloadVideo(){
    if(this.videoBlob){
      this.downloadFile(this.videoBlob,'video/mp4',this.videoName);
    }
  }

  deleteRecordedMedia(){
    console.log('delete Recorded Media');
    this.videoElementForRecordedMedia.src = '';
  }

  private downloadFile(data:any,type:string,filename:string):any{
    const blob = new Blob([data],{type:type});
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement('a');
    anchorElement.download = filename;
    anchorElement.href = url;
    anchorElement.click();
  }


}
