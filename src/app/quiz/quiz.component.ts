import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  items = [1,2,3];
  subItems = [1,2,3,4,5];
  carouselOptions: OwlOptions = {
    loop:false,
    margin:2,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:false,
    dots:false,
    navSpeed:700,
    navText:['',''],
    responsive:{
      0:{
       items:4 
      },
      400:{
        items:4
      },
      740:{
        items:4
      },
      940:{
        items:4
      }
    },
    nav:true
  };

  dataList = [
    {
      title:'abc',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0KAR2XdMrLm9XJ0f02aJpw_8EAf_DTETVA&usqp=CAU', paths:[
        {
          title:'abc2',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0KAR2XdMrLm9XJ0f02aJpw_8EAf_DTETVA&usqp=CAU',paths:[
            {
              title: 'abc3',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0KAR2XdMrLm9XJ0f02aJpw_8EAf_DTETVA&usqp=CAU',paths:[
                
              ]
            }
          ]
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
