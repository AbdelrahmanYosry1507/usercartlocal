import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserproductService } from '../../service/userproduct.service';

@Component({
  selector: 'app-product-detailsuser',
  templateUrl: './product-detailsuser.component.html',
  styleUrls: ['./product-detailsuser.component.css']
})
export class ProductDetailsuserComponent implements OnInit{
  id:any;
  Data:any = {};
  constructor (private route:ActivatedRoute, private service:UserproductService){
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);

  }
  GetProducts(){
    this.service.getProductbyId(this.id).subscribe(x=>{
      this.Data = x;
    })
  }
  ngOnInit(): void{
    this.GetProducts();
    console.log(this.Data);

  }

}
