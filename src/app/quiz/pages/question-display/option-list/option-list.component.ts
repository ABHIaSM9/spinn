import { Subscription } from 'rxjs';
import { QuizService } from './../../../../core/services/quiz.service';
import { Component, Input, OnInit, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss']
})
export class OptionListComponent implements OnInit,OnChanges {

  correctIndex:number;
  @Output() onSelect = new EventEmitter();
  @Input() options:any[];
  
  isSelected:boolean;
  selectedIndex:number;

  correctAnswerSubscription:Subscription;
  isOptionSelectedSubscription:Subscription;
  selectedOptionIndexSubscription:Subscription;


  constructor(private quizService:QuizService) { }

  ngOnInit(): void {

    this.correctIndex = this.quizService.getCorrectAnswerIndex();
    this.correctAnswerSubscription = this.quizService.getCorrectAnswerIndexListener().subscribe((correctAnswerIndex:number)=>{
      this.correctIndex = correctAnswerIndex;
    })
    this.selectedIndex =  this.quizService.getSelectedOptionIndex();
    this.quizService.getSelectedOptionIndexListener().subscribe((selectedOptionIndex:number)=>{
      this.selectedIndex = selectedOptionIndex;
    })
    this.isSelected = this.quizService.getIsOptionSelected();
    this.quizService.getIsOptionSelectedListener().subscribe((isOptionSelected:boolean)=>{
      this.isSelected = isOptionSelected;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.options && changes.options.currentValue != changes.options.previousValue){
      this.resetAll();
    }
  }

  private resetAll(){
    this.quizService.setIsOptionSelected(false);
    this.quizService.setSelectedOptionIndex(undefined)
  }

  onClick(value){
    if(!this.isSelected){
      this.quizService.setIsOptionSelected(true);
      this.quizService.setSelectedOptionIndex(value)
      console.log(value);
      this.onSelect.emit(value);
    }
  }


  ngOnDestroy(): void {
    this.correctAnswerSubscription?.unsubscribe();
    this.isOptionSelectedSubscription?.unsubscribe();
    this.selectedOptionIndexSubscription?.unsubscribe();
  }
}
