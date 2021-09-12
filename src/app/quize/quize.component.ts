import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.scss']
})
export class QuizeComponent implements OnInit {
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
