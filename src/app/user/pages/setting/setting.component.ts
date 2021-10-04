import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  accountOptions = [
    {icon:'account_circle',title:'update profile',routerlink:['/user']},
    {icon:'key',title:'change password',subTitle:'last change 2 weeks ago'},
  ]
  otherOptions = [
    {icon:'notifications_name',title:'push notification'},
    {icon:'settings',title:'update system setting',routerlink:['/user/system-setting']},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
