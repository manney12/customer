import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';

const routes: Routes=[
{path: 'customer', component: PostCustomerComponent}
];



@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
