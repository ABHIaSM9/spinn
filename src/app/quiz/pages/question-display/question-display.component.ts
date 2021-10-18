import { Subscription } from 'rxjs';
import { QuizService } from './../../../core/services/quiz.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import {quizData} from '../../../../data/data';
import { Location } from '@angular/common';
import { CounterComponent } from 'angular-circle-counter/src/app/counter/counter.component';


interface QuizQuestion{
  question:string;
  answers:string[];
  correctIndex:number;
}


@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.scss'],
})
export class QuestionDisplayComponent implements OnInit,OnChanges {
  @ViewChild('counter',{static:true}) counter:CounterComponent;
  of:number = 30;
  from:number = 0;
  to:number = this.of;
  animationTime:number = (this.of*1000);
  fontSize:number = 50;



  isFlagSelected = false;
  isCheckMode:boolean = false;
  quizIndex:number;
  quizQuestions:QuizQuestion[];
  quizQuestion:QuizQuestion;
  correctIndex:number;
  isSelectedOption:boolean;






  quizIndexSubscription:Subscription;
  isOptionSelectedSubscription:Subscription;


  constructor(private router:Router,private location:Location,private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizQuestions = this.quizService.getQuestionData();
    this.quizIndex = this.quizService.getQuizIndex();
    console.log('quizeIndex initial',this.quizIndex);
    this.quizService.getQuizIndexLitener().subscribe((index:number)=>{
      this.quizIndex = index;
      console.log('quizeIndex subscribe',this.quizIndex);
    })
    this.quizQuestion = this.quizService.getSelectedQuizQuestion();
    this.quizService.getSelectedQuizQuestionListener().subscribe((selectedQuestion)=>{
      this.quizQuestion = selectedQuestion;
    })
    this.isSelectedOption = this.quizService.getIsOptionSelected();
    this.quizService.getIsOptionSelectedListener().subscribe((isOptionSelected:boolean)=>{
      this.isSelectedOption = isOptionSelected;
    })

    this.isCheckMode = this.quizService.getIsCheckAnswer();
    this.quizService.getIsCheckAnswerLister().subscribe((value:boolean)=>{
      console.log('isCheckMode',value);
      console.log('isSelectedOption',this.isSelectedOption);
      this.isCheckMode = value;
    })
  }

  ngOnChanges(): void {
    // console.log('index -->',this.quizIndex);
  }

  onClick(value){
  }


  onCheckAnswer(){
    this.quizService.onCheckCorrectAnswer();
    // this.isCheckAnswer = true;
    // console.log('correct index',this.correctIndex);
  }


  onNext(){
      console.log('onClick',this.quizIndex);
      this.quizService.onNext();
      console.log(this.quizIndex);
      this.counter.restart();
      // this.isCheckAnswer = false;
  }
  onFlagSelect(){
    this.isFlagSelected  = !this.isFlagSelected;
  }
  timerFinished(){
    console.log('finished');
    this.quizService.onTimeFinish();
  }

  ngOnDestroy(): void {
    this.quizIndexSubscription?.unsubscribe();
    this.isOptionSelectedSubscription?.unsubscribe();
  }
}
