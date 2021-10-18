import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  list= [
    1,2,3,4,5,6,7,8
  ];

  constructor() { }

  ngOnInit(): void {
  }
  drop(event:CdkDragDrop<string[]>){
    moveItemInArray(this.list,event.previousIndex,event.currentIndex);
  }
  onClick(event){
    event.stopPropagation();
  }
}
