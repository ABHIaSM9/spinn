
import { Component} from '@angular/core';
import { MatButton} from '@angular/material/button'


@Component({

  selector:'cs-button',
  exportAs:'csButton',
  templateUrl:'./cst-button.component.html',
  styleUrls:['./cst-button.component.scss'],
  
})
export class CstButtonComponent {
  // @ViewChild('csButton',{static:true}) button;

  // constructor(public elementref:ElementRef,public focusmonitor:FocusMonitor) {
  //   super(elementref,focusmonitor,null);
  // }

}
