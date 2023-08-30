import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersharedModule } from './user/usershared/usershared.module';
import { FormsModule } from '@angular/forms';
import { UsercartModule } from './user/usercart/usercart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersharedModule,
    FormsModule,
    UsercartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
