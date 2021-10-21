import { fadeInFadeOutTrigger } from './../../../../animations/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { markedTrigger } from 'src/animations/animations';


@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss'],
})
export class WelcomeDialogComponent implements OnInit {

  constructor(private router:Router,public dialogRef:MatDialogRef<any>) { }

  ngOnInit(): void {

  }

  onNavigate(){
    this.dialogRef.close();
    this.router.navigate(['/auth/login']);
  }
}
