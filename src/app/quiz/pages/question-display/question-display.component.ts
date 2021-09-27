import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {quizeData} from '../../../../data/data';
import { Location } from '@angular/common';





@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.scss']
})
export class QuestionDisplayComponent implements OnInit {
  isFlagSelected = false;
  isCheckAnswer:boolean = true;
  progressValue = 100;
  quizeIndex = 0;
  quizeQuestions = quizeData;
  quizeQuestion;
  correctIndex:number;
  
  // timmerValue = 30;
  // selectedValue;


  constructor(private router:Router,private location:Location) { }

  ngOnInit(): void {
    this.quizeQuestion = this.quizeQuestions[this.quizeIndex];
  }

  onClick(value){
    console.log(value);
    if(value == this.quizeQuestion.correctIndex){
      console.log('right');
    }else{
      console.log('wrong');
    }
  }

  onBack(){
    
  }

  onCheckAnswer(){
    this.correctIndex = this.quizeQuestions[this.quizeIndex].correctIndex;
    this.isCheckAnswer = false;
    console.log('correct index',this.correctIndex);
  }


  onNext(){
    console.log('onClick');

     if(this.quizeIndex < this.quizeQuestions.length-1){
        this.quizeIndex++;
        this.quizeQuestion = this.quizeQuestions[this.quizeIndex];
      }else{
        this.router.navigate(['/quiz/congrats'])
      }
      console.log(this.quizeIndex);
      this.isCheckAnswer = true;
  }
  onFlagSelect(){
    this.isFlagSelected  = !this.isFlagSelected;
  }

}
