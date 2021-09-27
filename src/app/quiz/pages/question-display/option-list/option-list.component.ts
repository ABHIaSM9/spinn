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
  
  isSelected:boolean = false;
  selectedIndex:number;

  @Input() set correctIndexSetter(value:number){
    this.correctIndex = value;
    console.log('setter',value);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange');
    console.log('correctIndex',this.correctIndex);
    if(changes.options && changes.options.currentValue != changes.options.previousValue){
      this.resetAll();
    }
  }


  private resetAll(){
    this.isSelected = false;
    this.selectedIndex = undefined;
    this.correctIndex = undefined;
  }

  onClick(value){
    if(!this.isSelected){
      this.isSelected=true;
      this.selectedIndex = value;
      console.log(value);
      this.onSelect.emit(value);
    }
  }
}
