import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface TableElement{
  image:string;
  description:string;
  auther:string;
  autherImg:string;
}

const data:TableElement[] = [
  {image:'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__480.jpg',description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',autherImg:'https://www.w3schools.com/howto/img_avatar.png',auther:'name'},
  {image:'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__480.jpg',description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',autherImg:'https://www.w3schools.com/howto/img_avatar.png',auther:'name'},
  {image:'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__480.jpg',description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',autherImg:'https://www.w3schools.com/howto/img_avatar.png',auther:'name'},
  {image:'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__480.jpg',description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',autherImg:'https://www.w3schools.com/howto/img_avatar.png',auther:'name'},
  {image:'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__480.jpg',description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',autherImg:'https://www.w3schools.com/howto/img_avatar.png',auther:'name'},
  {image:'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__480.jpg',description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',autherImg:'https://www.w3schools.com/howto/img_avatar.png',auther:'name'},
]

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  displayedColumns:string[] = ['select','image','description','autherImg','auther'];
  dataSource = new MatTableDataSource<TableElement>(data);
  selection = new SelectionModel<TableElement>(true,[]);

  list= [
    1,2,3,4,5,6,7,8
  ];


  constructor() { }

  ngOnInit(): void {
  }
  drop(event:CdkDragDrop<string[]>){
    moveItemInArray(this.list,event.previousIndex,event.currentIndex);
  }
  onClick(event){
    event.stopPropagation();
  }

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  selectionToggle(){
    if(this.isAllSelected()){
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?:TableElement):string{
    if(!row){
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  onPage(event){
    console.log('page',event);
  }
  applyFilter(event){
    console.log(event);
  }
}
