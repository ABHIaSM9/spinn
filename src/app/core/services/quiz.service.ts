import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { quizData } from 'src/data/data';



interface QuizQuestion{
  question:string;
  answers:string[];
  correctIndex:number;
}


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizQuestions:QuizQuestion[] = quizData;
  private selectedQuizQuestion:QuizQuestion;
  private correctIndex:number;
  private quizIndex = 0;
  private selectedOptionIndex:number;
  private isOptionSelected = false; 


  private quizIndexSubject = new Subject<number>();
  private selectedQuizQuestionSubject = new Subject<QuizQuestion>();
  private correctIndexSubject = new Subject();
  private selectedOptionIndexSubject = new Subject();
  private isOptionSelectedSubject = new Subject();


  constructor(private router:Router) {
    this.initialization();
   }


  initialization(){
    this.selectedQuizQuestion = this.quizQuestions[this.quizIndex];
  }

  getQuestionData():QuizQuestion[]{
    return this.quizQuestions;
  }

  getCorrectAnswerIndex(){
    return this.correctIndex;
  }

  getCorrectAnswerIndexListener(){
    return this.correctIndexSubject.asObservable();
  }

  getSelectedQuizQuestion():QuizQuestion{
    return this.selectedQuizQuestion;
  }
  getSelectedQuizQuestionListener():Observable<QuizQuestion>{
    return this.selectedQuizQuestionSubject.asObservable();
  }

  getQuizIndexLitener():Observable<number>{
    return this.quizIndexSubject.asObservable();
  }

  getQuizIndex():number{
    return this.quizIndex;
  }



  getIsOptionSelected(){
    return this.isOptionSelected
  }

  setIsOptionSelected(isOptionSelected:boolean){
    this.isOptionSelected = isOptionSelected;
    this.isOptionSelectedSubject.next(this.isOptionSelected);
  }

  getIsOptionSelectedListener(){
    return this.isOptionSelectedSubject.asObservable();
  }



  setSelectedOptionIndex(selectedOptionIndex:number){
    this.selectedOptionIndex = selectedOptionIndex;
    this.selectedOptionIndexSubject.next(this.selectedOptionIndex);
  }

  getSelectedOptionIndex(){
    return this.selectedOptionIndex;
  }

  getSelectedOptionIndexListener(){
    return this.selectedOptionIndexSubject.asObservable();
  }



  onNext(){
    if(this.quizIndex < this.quizQuestions.length-1){
      this.quizIndex++;
      this.selectedQuizQuestion = this.quizQuestions[this.quizIndex];
      this.correctIndex = undefined;
      this.correctIndexSubject.next(this.correctIndex);
      this.quizIndexSubject.next(this.quizIndex);
      this.selectedQuizQuestionSubject.next(this.selectedQuizQuestion);
    }else{
      this.correctIndex = undefined;
      this.correctIndexSubject.next(this.correctIndex);
      this.quizIndex = 0;
      this.quizIndexSubject.next(this.quizIndex);
      this.router.navigate(['/quiz/congrats'])
    }
  }

  onCheckCorrectAnswer(){
    this.correctIndex = this.quizQuestions[this.quizIndex].correctIndex;
    this.correctIndexSubject.next(this.correctIndex);
  }
}
