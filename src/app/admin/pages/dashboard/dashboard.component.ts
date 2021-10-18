import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list = [1,2,3,4,5,6,7];
  carouselOptions: OwlOptions = {
    loop:false,
    margin:2,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:false,
    dots:false,
    // autoplay:true,
    navSpeed:700,
    navText:[`<div class="nav-btn prev-slide">prev</div>`,`<div class="nav-btn prev-slide">next</div>`],
    responsive:{
      0:{
       items:1
      },
      400:{
        items:1
      },
      740:{
        items:2
      },
      940:{
        items:3
      }
    },

    nav:false
  };


  constructor() { }

  ngOnInit(): void {
  }

}
