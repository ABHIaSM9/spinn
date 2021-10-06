import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { quizData } from 'src/data/data';
import { environment } from 'src/environments/environment';



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
  private isCheckAnswer = false;


  private _quizIndex = new Subject<number>();
  private _selectedQuizQuestion = new Subject<QuizQuestion>();
  private _correctIndex = new Subject();
  private _selectedOptionIndex = new Subject();
  private _isOptionSelected = new Subject();
  private _isCheckAnswer = new Subject();


  constructor(private router:Router, private http:HttpClient) {
    this.initialLoad();
   }


  private initialLoad(){
    this.selectedQuizQuestion = this.quizQuestions[this.quizIndex];
  }


  getIsCheckAnswerLister(){
    return this._isCheckAnswer.asObservable();
  }
  getIsCheckAnswer(){
    return this.isCheckAnswer;
  }



  getQuestionData():QuizQuestion[]{
    return this.quizQuestions;
  }

  getCorrectAnswerIndex(){
    return this.correctIndex;
  }

  getCorrectAnswerIndexListener(){
    return this._correctIndex.asObservable();
  }

  getSelectedQuizQuestion():QuizQuestion{
    return this.selectedQuizQuestion;
  }
  getSelectedQuizQuestionListener():Observable<QuizQuestion>{
    return this._selectedQuizQuestion.asObservable();
  }

  getQuizIndexLitener():Observable<number>{
    return this._quizIndex.asObservable();
  }

  getQuizIndex():number{
    return this.quizIndex;
  }



  getIsOptionSelected(){
    return this.isOptionSelected
  }

  setIsOptionSelected(isOptionSelected:boolean){
    this.isOptionSelected = isOptionSelected;
    this._isOptionSelected.next(this.isOptionSelected);
  }

  getIsOptionSelectedListener(){
    return this._isOptionSelected.asObservable();
  }



  setSelectedOptionIndex(selectedOptionIndex:number){
    this.selectedOptionIndex = selectedOptionIndex;
    this._selectedOptionIndex.next(this.selectedOptionIndex);
  }

  getSelectedOptionIndex(){
    return this.selectedOptionIndex;
  }

  getSelectedOptionIndexListener(){
    return this._selectedOptionIndex.asObservable();
  }



  //
  getNextQuestion(area:string,level:string,device:string,user:string){

    this.http.get(`${environment.baseApiUrl}/questionset/area/${area}/level/${level}/device/${device}/user/${user}`).subscribe(
      (value)=>{
        console.log(value)
      },
      (err)=>{
        console.log('error',err);
        if(err.response){
          if(err.response.status == 400){
            console.log('Bad Request')
          }
          if(err.response.status == 401){
            console.log('Unauthorized');
          }
          if(err.response.status == 403){
            console.log('Forbidden');
          }
          if(err.response.status == 404){
            console.log('NotFound');
          }
          if(err.response.status == 500){
            console.log('Internal server error');
          }
        }
      }
    );
  }

  findByUserNotAttempted(user:string){
    this.http.get(`${environment.baseApiUrl}/questionset/notattemptedbyuser/${user}`).subscribe(
      (value)=>{
        console.log('error',value);
      },
      (err)=>{
        console.log('error',err);
        if(err.response){
          if(err.response.status == 400){
            console.log('Bad Request')
          }
          if(err.response.status == 401){
            console.log('Unauthorized');
          }
          if(err.response.status == 403){
            console.log('Forbidden');
          }
          if(err.response.status == 404){
            console.log('NotFound');
          }
          if(err.response.status == 500){
            console.log('Internal server error');
          }
        }
      }
    );
  }

  questionAreaFindById(area:string){
    this.http.get(`${environment.baseApiUrl}/questionset/${area}`).subscribe(
      (value)=>{

      },
      (err)=>{
        console.log('error',err);
        if(err.response){
          if(err.response.status == 400){
            console.log('Bad Request')
          }
          if(err.response.status == 401){
            console.log('Unauthorized');
          }
          if(err.response.status == 403){
            console.log('Forbidden');
          }
          if(err.response.status == 404){
            console.log('NotFound');
          }
          if(err.response.status == 500){
            console.log('Internal server error');
          }
        }
      }
    );
  }

  findByAreaNotAttemptByUser(area:string,user:string){
    this.http.get(`${environment.baseApiUrl}/questionset/${area}/notattemptedbyuser/${user}`).subscribe(
      (value)=>{
        console.log(value);
      },
      (err)=>{
        console.log('error',err);
        if(err.response){
          if(err.response.status == 400){
            console.log('Bad Request')
          }
          if(err.response.status == 401){
            console.log('Unauthorized');
          }
          if(err.response.status == 403){
            console.log('Forbidden');
          }
          if(err.response.status == 404){
            console.log('NotFound');
          }
          if(err.response.status == 500){
            console.log('Internal server error');
          }
        }
      }
    );
  }








  onNext(){
    if(this.quizIndex < this.quizQuestions.length-1){
      this.quizIndex++;
      this.selectedQuizQuestion = this.quizQuestions[this.quizIndex];
      this.correctIndex = undefined;
      this.isCheckAnswer = false;
      this._correctIndex.next(this.correctIndex);
      this._quizIndex.next(this.quizIndex);
      this._selectedQuizQuestion.next(this.selectedQuizQuestion);
      this._isCheckAnswer.next(this.isCheckAnswer);
    }else{
      this.correctIndex = undefined;
      this.quizIndex = 0;
      this.isCheckAnswer = false;
      this._correctIndex.next(this.correctIndex);
      this._quizIndex.next(this.quizIndex);
      this._isCheckAnswer.next(this.isCheckAnswer);
      this.router.navigate(['/quiz/congrats'])
    }
  }

  onCheckCorrectAnswer(){
    this.correctIndex = this.quizQuestions[this.quizIndex].correctIndex;
    this._isCheckAnswer.next(true);
    this._correctIndex.next(this.correctIndex);
  }

  onTimeFinish(){
    this.correctIndex = this.quizQuestions[this.quizIndex].correctIndex;
    this._isCheckAnswer.next(true);
    this._correctIndex.next(this.correctIndex);
    this.isOptionSelected = true;
    this._isOptionSelected.next(true);
  }
}
