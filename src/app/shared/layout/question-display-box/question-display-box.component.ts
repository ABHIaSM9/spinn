import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-display-box',
  templateUrl: './question-display-box.component.html',
  styleUrls: ['./question-display-box.component.scss']
})
export class QuestionDisplayBoxComponent implements OnInit {
  @Input() questionId:string | number;
  @Input() question:string;

  constructor() { }

  ngOnInit(): void {
  }

}
