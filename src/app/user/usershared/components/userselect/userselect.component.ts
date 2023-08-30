import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-userselect',
  templateUrl: './userselect.component.html',
  styleUrls: ['./userselect.component.css']
})
export class UserselectComponent implements OnInit{
  ngOnInit(){

  }
@Input() title:String = '';
@Input() categories:any;
@Output() selectedvalue = new EventEmitter()
  getAllCategoriesBycategory(event:any){
this.selectedvalue.emit(event);
  }

}
