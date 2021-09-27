import { browser } from 'protractor';
import { Injectable } from '@angular/core';
import * as RecordRtc from 'recordrtc';

@Injectable({
  providedIn: 'root'
})
export class VideoRecordingService {
  private recorder: any;
  private stream: any;

  constructor() { }

  startRecording(config:any):Promise<any>{
    let browser = window.navigator;
    if(this.recorder){
      //if already recording something
      return;
    }
    return new Promise((resolve, reject)=>{
      browser.mediaDevices.getUserMedia(config)
      .then(stream => {
        this.stream = stream;
        this.record();
        resolve(this.stream);
      })
      .catch(error=>{
        reject();
      })
    })
  }

  private record(){
    this.recorder = new RecordRtc(this.stream,{
      type:'video',
      mimeType: 'video/html',
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000
    });

    this.recorder.startRecording();
  }

  private processVideo(audioVideoWebUrl){
    const recordedBlob = this.recorder.getBlob();
    this.recorder.getDataURL((dataUrl)=>{});
    const recordedName = encodeURIComponent('vide_'+new Date().getTime()+'.webm');
  }

  // private stopRecording(){
  //   this.recorder
  // }

}
