import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-oneproduct',
  templateUrl: './oneproduct.component.html',
  styleUrls: ['./oneproduct.component.css']
})
export class OneproductComponent implements OnInit {
  @Input() item:any = {};
  @Output() itm = new EventEmitter();
  addbutton:Boolean = false;
  amount:number = 0;
  ngOnInit() {

  }

  add(){
    console.log("he");

this.itm.emit({itm:this.item , quantity:this.amount});
console.log(this.amount);

console.log("ha");
  }


}
