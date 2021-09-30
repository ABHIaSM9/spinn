import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  panelOpenState:boolean = false;
  width:number;

  profileForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      displayName:new FormControl('',Validators.required),
      aboutMe:new FormControl(''),
    })
  }

  OnChanges(){

  }
  onSubmit(){
    console.log('profileForm',this.profileForm);
  }

}
