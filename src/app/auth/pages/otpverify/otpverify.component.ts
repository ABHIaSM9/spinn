import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { WelcomeDialogComponent } from '../welcome-dialog/welcome-dialog.component';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.scss']
})
export class OtpverifyComponent implements OnInit {

  @ViewChild('otp',{static:true}) otp;
  constructor(private router:Router,public dialog:MatDialog) { }

  ngOnInit(): void {
  }


  onSubmit(){
    const values = this.otp.otpForm.value;
    if(values.ctrl_0 == 1 && values.ctrl_1 == 1 && values.ctrl_2 == 1 && values.ctrl_3 == 1){
      console.log('match');
      this.dialog.open(WelcomeDialogComponent,{width:"25rem"});
    }else{
      console.log(values);
      console.log('did not match');
    }
  }

}
