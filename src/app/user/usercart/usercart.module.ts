import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { UsersharedModule } from '../usershared/usershared.module';




@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    UsersharedModule
  ],

})
export class UsercartModule { }
