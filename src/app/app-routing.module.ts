import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './user/usercart/components/cart/cart.component';
import { AllProductuserComponent } from './user/userproduct/components/all-productuser/all-productuser.component';
import { ProductDetailsuserComponent } from './user/userproduct/components/product-detailsuser/product-detailsuser.component';

const routes: Routes = [
  { path: "products", component: AllProductuserComponent },
  { path: "cart", component: CartComponent },
  { path: "detailes/:id", component: ProductDetailsuserComponent },
  { path: "**", redirectTo: "products", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
