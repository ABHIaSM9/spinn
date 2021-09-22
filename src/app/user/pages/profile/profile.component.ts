import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  width:number;

  @ViewChild('f',{static:true}) form:NgForm;
  constructor() { 
    this.width = document.body.clientWidth;
  }

  ngOnInit(): void {
  }

  submit(){
    const value = this.form.value;
    console.log(value);
  }
}
