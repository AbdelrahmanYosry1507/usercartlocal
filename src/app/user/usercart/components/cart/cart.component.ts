import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productcart:any[]= [];
  total:any = 0;
  success:Boolean=false;
constructor(private service:CartService){

}
  ngOnInit(){
    this.GetCart();
  }
//put the product into the cart
  GetCart(){
    if("item" in localStorage) {
      this.productcart = JSON.parse(localStorage.getItem("item")!)
      console.log(this.productcart);
      this.getCartTotal();
  }
  console.log(this.productcart);

}
//get the total price
getCartTotal() {
  this.total = 0
  for(let x in this.productcart) {
    this.total += this.productcart[x].itm.price * this.productcart[x].quantity;
    console.log(this.total);

  }
}

//add item
addAmount(index:number) {
  this.productcart[index].quantity++
  this.getCartTotal()
  localStorage.setItem("item" , JSON.stringify(this.productcart))
}
//mins item
minsAmount(index:number) {
  this.productcart[index].quantity--
  this.getCartTotal()
  localStorage.setItem("item" , JSON.stringify(this.productcart))
}
//detect change
detectchange(){
  localStorage.setItem("item" , JSON.stringify(this.productcart))

}

//delete products
delteproduct(index:number){
  this.productcart.splice(index,1);
  localStorage.setItem("item" , JSON.stringify(this.productcart));
  this.getCartTotal();

}

//delet all products
clearAll(){
  this.productcart = [];
  localStorage.setItem("item" , JSON.stringify(this.productcart));
  this.getCartTotal();
}
// send to backend
addCart(){
  let products = this.productcart.map(item=>{
    return {productid:item.itm.id , quantaty:item.quantity}
  });
  let model={
    userId:5,
    date:new Date(),
    products:products
  }

this.service.createnewcart(model).subscribe((x:any)=>{
  this.success =true;
})
}

}
