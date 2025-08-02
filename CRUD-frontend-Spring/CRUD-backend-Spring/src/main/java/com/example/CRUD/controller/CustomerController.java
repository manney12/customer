package com.example.CRUD.controller;


import com.example.CRUD.entity.Customer;
import com.example.CRUD.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/customer")
    public Customer postCustomer(@RequestBody Customer customer){
      return customerService.postCustomer(customer);
    }

    @GetMapping("/customers")
    private List<Customer> getAllCustomer(){
        return customerService.getAllCustomer();
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable long id){
       Customer customer = customerService.getCustomerById(id) ;
       if(customer == null)
           return ResponseEntity.notFound().build();
       return ResponseEntity.ok().body(customer);
    }

    @PutMapping("/customer/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id,@RequestBody Customer customer){

       Customer exisitingCustomer = customerService.getCustomerById(id);
        if(exisitingCustomer == null)
            return ResponseEntity.notFound().build();
        exisitingCustomer.setName(customer.getName());
        exisitingCustomer.setEmail(customer.getEmail());
        exisitingCustomer.setPhone(customer.getPhone());
        Customer updatedCustomer = customerService.updateCustomer(exisitingCustomer);

        return ResponseEntity.ok().body(updatedCustomer);
    }

    @DeleteMapping("/customer/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable long id) {
        Customer existingCustomer = customerService.getCustomerById(id);
        if (existingCustomer == null) {
            return ResponseEntity.notFound().build();
        }
        customerService.deleteCustomer(id);
        return ResponseEntity.ok().build();
    }
}
