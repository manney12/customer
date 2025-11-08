import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
      console.log(this.customers);
    }, (err) => {
      console.error('Error fetching customers:', err);
    });
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe((res)=>{
      console.log(res);
      this.getAllCustomers();
    })

  }
}
