import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f',{static:true}) form:NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    const value = this.form.value;
    console.log(value);
  }
}
