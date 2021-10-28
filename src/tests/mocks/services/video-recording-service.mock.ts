import { Observable,of } from "rxjs";

const stream:MediaStream = new MediaStream();
const recordUrl:string = 'recordedUrl';
const recorded:any = {}

export class VideoRecordingServiceMock{
  getStreamListener():Observable<MediaStream>{
    return of(stream);
  }
  getRecordUrlListener():Observable<string>{
    return of(recordUrl);
  }
  getRecordedListener():Observable<any>{
    return of(recorded);
  }
}
