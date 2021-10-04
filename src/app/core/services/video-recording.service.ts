import { browser } from 'protractor';
import { Injectable } from '@angular/core';
import * as RecordRtc from 'recordrtc';
import { Subject, Observable } from 'rxjs';
import * as RecordRTC from 'recordrtc';




interface RecordedVideoOutput{
  blob: Blob,
  url: any,
  title: string
}


@Injectable({
  providedIn: 'root'
})
export class VideoRecordingService {
  private recorder: RecordRTC;
  private stream: MediaStream;
  private recordedMedia;


  private _stream = new Subject<MediaStream>();
  private _recordUrl = new Subject<string>();
  private _recorded = new Subject<RecordedVideoOutput>();





  getStreamListener():Observable<MediaStream>{
    return this._stream.asObservable();
  }

  getRecordUrlListener():Observable<string>{
    return this._recordUrl.asObservable();
  }

  getRecordedListener():Observable<RecordedVideoOutput>{
    return this._recorded.asObservable();
  }





  constructor() { }






  //start video media and recording
  startRecording(config:any):Promise<any>{
    console.log('starting Recording');
    let browser = window.navigator;
    //check is recording
    if(this.recorder){
      //if already recording something return;
      return;
    }
    //this promise will return stream object if mediaDevices  exist in browser api
    //if media not exist the this will throw error
    return new Promise((resolve, reject)=>{
      browser.mediaDevices.getUserMedia(config)
      .then(stream => {
        this.stream = stream;
        this.record();                // recording function
        resolve(this.stream);
      })
      .catch(error=>{
        reject(error);
      })
    })
  }






  //start Recording by RecordRTC
  private record(){
    if(this.stream){
      this.recorder = new RecordRtc(this.stream,{
        type:'video',
        mimeType: 'video/webm',
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 128000
      });
      this.recorder.startRecording();
    }
  }




  //process video and generate Blob and url
  private processVideo(audioVideoWebUrl:any){
    console.log('processVideo',audioVideoWebUrl);
    const recordedBlob = this.recorder.getBlob();
    console.log('recordedBlob',recordedBlob);
    // this.recorder.getDataURL();
    const recordedName = encodeURIComponent('video_'+new Date().getTime()+'.webm');
    this.recordedMedia = {
      blob:recordedBlob,
      url: audioVideoWebUrl,
      title: recordedName
    };

    this._recorded.next(this.recordedMedia);
    this.stopMedia();
  }



  //stop recording and stop streaming
  private stopMedia(){
    if(this.recorder){
      //stop recording
      this.recorder = null;
      //stop streaming
      if(this.stream){
        this.stream.getAudioTracks().forEach(track=>track.stop());
        this.stream.getVideoTracks().forEach(track=>track.stop());
        this.stream = null;
      }
    }
  }

  deleteMedia(){
    this.recordedMedia = null;
  }

  stopRecording(){
    if(this.recorder){
      this.recorder.stopRecording(this.processVideo.bind(this));
    }
  }

}
