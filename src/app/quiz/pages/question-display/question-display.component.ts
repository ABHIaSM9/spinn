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
  isLiked = false;
  progressValue = 100;
  quizeIndex = 0;
  quizeQuestions = quizeData;
  quizeQuestion;
  
  // timmerValue = 30;
  // selectedValue;


  constructor(private router:Router,private location:Location) { }

  ngOnInit(): void {
    this.quizeQuestion = this.quizeQuestions[this.quizeIndex];

    setInterval(()=>{
      // if(this.quizeIndex < this.quizeQuestions.length-1){
      //   this.quizeIndex++;
      //   this.quizeQuestion = this.quizeQuestions[this.quizeIndex];
      // }else{
      //   this.router.navigate(['/quize/congrats'])
      // }
      // console.log(this.quizeIndex);
      
    },10000);

    // setInterval(()=>{
    //   this.timmerValue--;
    //   // this.progressValue = Math.floor((this.timmerValue/100)*100);
    //   if(this.timmerValue == 0){
    //     this.timmerValue = 30;
    //   }
    // },1000)
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

  onLike(){
    this.isLiked = !this.isLiked;
  }
  onFlagSelect(){
    this.isFlagSelected  = !this.isFlagSelected;
  }

}
