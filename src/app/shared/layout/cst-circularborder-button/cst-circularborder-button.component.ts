import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cst-circularborder-button',
  templateUrl: './cst-circularborder-button.component.html',
  styleUrls: ['./cst-circularborder-button.component.scss']
})
export class CstCircularborderButtonComponent implements OnInit {
  @Input() value:String;
  constructor() { }

  ngOnInit(): void {
  }

}
