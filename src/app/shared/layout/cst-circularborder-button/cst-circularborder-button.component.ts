import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-cst-circularborder-button',
  templateUrl: './cst-circularborder-button.component.html',
  styleUrls: ['./cst-circularborder-button.component.scss'],
  // host:{'[class.custom-button]':'true'}
  
})
export class CstCircularborderButtonComponent{
  @Input() value:String;

}
