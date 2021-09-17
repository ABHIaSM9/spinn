import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-system-setting-option-card',
  templateUrl: './system-setting-option-card.component.html',
  styleUrls: ['./system-setting-option-card.component.scss']
})
export class SystemSettingOptionCardComponent implements OnInit {

  @Input() title:String;
  @Input() icon:String;

  @Output() onToggle = new EventEmitter();
  @Input() checked;
  disabled = false;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onChange(){
    this.checked =! this.checked;
    this.onToggle.emit(this.checked);
  }

  ngAfterViewInit(): void {
    // console.log('--',this.checked);
  }
}
