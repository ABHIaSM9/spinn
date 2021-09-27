import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoRecordingService } from 'src/app/core/services/video-recording.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('videoElement',{static:true}) videoElement:ElementRef;
  video:any;
  isVideoRecording = false;
  
  width:number;

  @ViewChild('f',{static:true}) form:NgForm;
  constructor(private videoRecordingService:VideoRecordingService) { 
    // setTimeout(()=>{
    //   this.startVideoRecording();
    // },5000)
  } 

  ngOnInit(): void {
    this.video = this.videoElement.nativeElement;
  }

  onSubmit(){
    const value = this.form.value;
    console.log(value);
  }
  startVideoRecording(){
    if(!this.isVideoRecording){
      this.video.controls = false;
      this.isVideoRecording = true;
      this.videoRecordingService.startRecording({video:{ facingMode:'user',width:320},audio:true})
      .then(stream=>{
        this.video.srcObject = stream;
        this.video.play();
      })
      .catch(err => {
        console.log('error-------->',err);
      })
    }
  }
}
