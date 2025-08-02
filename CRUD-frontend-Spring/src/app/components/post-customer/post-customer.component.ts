import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NonNullableFormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html'
})
export class PostCustomerComponent implements OnInit {
  postCustomerForm!: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
  }>;

  constructor(private fb: NonNullableFormBuilder) {} // Use NonNullable for safety

  ngOnInit(): void {
    this.postCustomerForm = this.fb.group({
      name: this.fb.control('', { validators: [Validators.required] }),
      email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
      phone: this.fb.control('', { validators: [Validators.required] })
    });
  }

  onSubmit(): void {
    if (this.postCustomerForm.valid) {
      console.log('Form submitted:', this.postCustomerForm.value);
      // You can send this.postCustomerForm.value to your API here
    } else {
      console.warn('Form is invalid');
    }
  }
}
