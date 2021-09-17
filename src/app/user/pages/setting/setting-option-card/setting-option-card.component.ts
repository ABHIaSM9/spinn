import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-option-card',
  templateUrl: './setting-option-card.component.html',
  styleUrls: ['./setting-option-card.component.scss']
})
export class SettingOptionCardComponent implements OnInit {
  @Input() icon:string;
  @Input() title:String;
  @Input() subTitle:String;
  constructor() { }

  ngOnInit(): void {
  }

}
