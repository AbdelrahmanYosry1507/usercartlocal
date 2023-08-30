import { Component, OnInit } from '@angular/core';
import { UserproductService } from '../../service/userproduct.service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-all-productuser',
  templateUrl: './all-productuser.component.html',
  styleUrls: ['./all-productuser.component.css']
})
export class AllProductuserComponent implements OnInit{
  constructor(private service:UserproductService){

  }
  products:any;
  categories:any;
  productsCategory:any;
  productcart:any[] =[];
  ngOnInit(){
this.Getallproducts();
this.Getallcategories();
  }
  //for get all the products from the api
  Getallproducts(){
    this.service.getAllproduct().subscribe((res: any)=>{
      this.products = res;
      console.log(res);
      console.log(this.products);
    })
  }
  // for get all the categories from api
  Getallcategories(){
    this.service.getAllcategories().subscribe((res:any)=>{
      this.categories = res;
      console.log(this.categories);

    }
      )
  }
  // get broduct  by category
  getAllCategoriesBycategory(event:any){
    let value = event.target.value;
    console.log(value);
    if(value=="All"){
      this.Getallproducts();
    }
    else{
      this.service.getAllCategoriesBycategory(value).subscribe(x=>{
        this.products = x;
      })
    }

    console.log("ssss");
  }
/*
  add(event:any){
    //JSON.stringify() send data
    //JSON.parse() recive data
    if("cart" in  localStorage){
      this.product_cart = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.product_cart.find((item:any)=> item.id == event.id);
      if(exist){
        alert("This product already added");
      }
      else{
        this.product_cart.push(event);
        localStorage.setItem("cart",JSON.stringify(this.product_cart));
      }

    }
    else{
      this.product_cart.push(event);
      localStorage.setItem("cart",JSON.stringify(this.product_cart));
    }


  }
}
*/

add(event:any) {
// Correct usage of find and push

// Initialize an array

// Using find to search for an item



// Using push to add an item to the array



  if("item" in localStorage) {
    this.productcart = JSON.parse(localStorage.getItem("item")!)
    console.log("heeeeee");

    let exist = this.productcart.find(item => item.itm.id == event.itm.id)
    console.log("haaaaaaa");
    if(exist) {
      alert("Product is already in your cart")
    }else {
      this.productcart.push(event)
      localStorage.setItem("item" , JSON.stringify(this.productcart))
    }
  } else {
    this.productcart.push(event)
    localStorage.setItem("item" , JSON.stringify(this.productcart))
  }
}

}
