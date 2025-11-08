import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NonNullableFormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent implements OnInit {
  postCustomerForm!: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
  }>;

  constructor(
    private fb: NonNullableFormBuilder,
    private customerService: CustomerService,
    private router: Router ) {}

  ngOnInit(): void {
    this.postCustomerForm = this.fb.group({
      name: this.fb.control('', { validators: [Validators.required] }),
      email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
      phone: this.fb.control('', { validators: [Validators.required] })
    });
  }

  onSubmit(): void {
    if (this.postCustomerForm.valid) {
      this.postCustomer();
    } else {
      console.warn('Form is invalid');
    }
  }

  postCustomer(): void {
    console.log(this.postCustomerForm.value);
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res) => {
      console.log('Customer created:', res);
      this.router.navigateByUrl("/")
    });
  }
}
