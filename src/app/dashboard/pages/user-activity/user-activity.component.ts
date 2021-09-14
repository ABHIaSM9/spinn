import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions} from 'chart.js';
import { SingleDataSet,Label,monkeyPatchChartJsLegend,monkeyPatchChartJsTooltip} from 'ng2-charts';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {
  userSelectedSubjects = [1,2,3,4];

  public pieChartOption: ChartOptions = {
    responsive:true
  };

  public pieChartLabels: Label[]= [
    'a','b','c'
  ];
  public pieChartType:ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugin = [];
  public pieChartData: SingleDataSet = [
    300,400,500
    // {
    //   data:[45,34,75,77],
    //   label:'abc 1'
    // }
  ];
  

  constructor() { }
  // @ViewChild('mychart',{static:true}) myChart:ElementRef;
  // canvas: HTMLCanvasElement;
  // ctx:any;

  ngOnInit(): void {
    // console.log(this.myChart);
    // this.canvas = (this.myChart.nativeElement as HTMLCanvasElement);
    // this.ctx = this.canvas.getContext('2d');
    // const mychart = new Chart(this.ctx,{
    //   type:'pie',
    //   data:{
    //     labels:['Red','orange','Yellow','Green','Blue'],
    //     datasets:[
    //       {
    //         label:'a',
    //         data: 50,     
    //       }
    //     ]
    //   }
    // });


  }

}
