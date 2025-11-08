import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { UpdateCustomersComponent } from './components/update-customers/update-customers.component';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent,
    UpdateCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
],
  providers: [PostCustomerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
