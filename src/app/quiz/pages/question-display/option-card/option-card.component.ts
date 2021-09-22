import { Component, HostListener, Input, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {
  @Input() option:string;
  constructor() { }

  ngOnInit(): void {
  }
}
