import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneproductComponent } from './components/oneproduct/oneproduct.component';
import { UsersharedModule } from '../usershared/usershared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UsersharedModule,
    RouterModule
  ],exports:[

    ]
})
export class UserproductModule { }
