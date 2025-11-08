import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent {

  updateCustomerForm!: FormGroup;
  id:number=this.activatedRoute.snapshot.params["id"];
  

  constructor(private activatedRoute: ActivatedRoute,
    private service: CustomerService,
    private fb: FormBuilder,
    private router: Router){}

  ngOnInit(){
      //this.getCustomerById(this.id);
       this.updateCustomerForm = this.fb.group({
            name: this.fb.control('', { validators: [Validators.required] }),
            email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
            phone: this.fb.control('', { validators: [Validators.required] })
          })
          this.getCustomerById(this.id);
  }

  getCustomerById(id:number){
    this.service.getCustomerById(this.id).subscribe((res) =>{
      console.log(res);
      this.updateCustomerForm.patchValue(res);
    })
  }

   onSubmit(): void {
    if (this.updateCustomerForm.valid) {
      this.getCustomerById(this.id);
    } else {
      console.warn('Form is invalid');
    }
  }

  updateCustomer(){
    this.service.updateCustomers(this.id, this.updateCustomerForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
          this.router.navigateByUrl("");
      }
    })
  }

  

}
