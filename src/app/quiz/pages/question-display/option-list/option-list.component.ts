import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss']
})
export class OptionListComponent implements OnInit {
  selectedIndex:number;
  @Output() onSelect = new EventEmitter();
  @Input() options:any[];
  constructor() { }

  ngOnInit(): void {
  }

  onClick(value){
    this.selectedIndex = value;
    console.log(value);
    this.onSelect.emit(value);
  }
}
