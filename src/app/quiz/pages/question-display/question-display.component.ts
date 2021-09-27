import { Subscription } from 'rxjs';
import { QuizService } from './../../../core/services/quiz.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import {quizData} from '../../../../data/data';
import { Location } from '@angular/common';


interface QuizQuestion{
  question:string;
  answers:string[];
  correctIndex:number;
}


@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.scss']
})
export class QuestionDisplayComponent implements OnInit,OnChanges {
  isFlagSelected = false;
  isCheckAnswer:boolean = true;
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
  }

  ngOnChanges(): void {
    console.log('index -->',this.quizIndex);
  }

  onClick(value){
    // console.log(value);
    // if(value == this.quizQuestion.correctIndex){
    //   console.log('right');
    // }else{
    //   console.log('wrong');
    // }
  }


  onCheckAnswer(){
    this.quizService.onCheckCorrectAnswer();
    this.isCheckAnswer = false;
    console.log('correct index',this.correctIndex);
  }


  onNext(){
      console.log('onClick',this.quizIndex);
      this.quizService.onNext();
      console.log(this.quizIndex);
      this.isCheckAnswer = true;
  }
  onFlagSelect(){
    this.isFlagSelected  = !this.isFlagSelected;
  }


  ngOnDestroy(): void {
    this.quizIndexSubscription?.unsubscribe();
    this.isOptionSelectedSubscription?.unsubscribe();
  }
}
