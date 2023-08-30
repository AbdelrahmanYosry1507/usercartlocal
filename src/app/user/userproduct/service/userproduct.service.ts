import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserproductService {
  constructor(private http:HttpClient) { }
  getAllproduct(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  getAllcategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getAllCategoriesBycategory(cat:String){
    return this.http.get( 'https://fakestoreapi.com/products/category/'+cat)
  }
  getProductbyId(id:number){
    return this.http.get('https://fakestoreapi.com/products/'+id);
  }

}
