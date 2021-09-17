import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.scss']
})
export class OtpverifyComponent implements OnInit {
  
  @ViewChild('otp',{static:true}) otp;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const values = this.otp.otpForm.value;
    if(values.ctrl_0 == 1 && values.ctrl_0 == 1 && values.ctrl_0 == 1 && values.ctrl_0 == 1){
      console.log('match');
      this.router.navigate(['/auth/login'])
    }else{
      console.log(values);
      console.log('did not match');
    }
  }
}
