import { Component, HostListener, Input, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {
  @Input() option:string;
  @Input() isRight:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
