import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserheaderComponent } from './components/userheader/userheader.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AllProductuserComponent } from '../userproduct/components/all-productuser/all-productuser.component';
import { UserselectComponent } from './components/userselect/userselect.component';
import { OneproductComponent } from '../userproduct/components/oneproduct/oneproduct.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../usercart/components/cart/cart.component';



@NgModule({
  declarations: [
    UserheaderComponent,
    AllProductuserComponent,
    UserselectComponent,
    OneproductComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
   ],
  exports:[
    UserheaderComponent,
    HttpClientModule,
    AllProductuserComponent,
    UserselectComponent,
    OneproductComponent,
    FormsModule,

  ]
})
export class UsersharedModule { }
