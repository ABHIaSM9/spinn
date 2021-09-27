import { Injectable } from '@angular/core';
import { quizeData } from 'src/data/data';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizeQuestions = quizeData;

  constructor() { }

  onNext(){

  }
  onCheckAnswer(){
    
  }
}
