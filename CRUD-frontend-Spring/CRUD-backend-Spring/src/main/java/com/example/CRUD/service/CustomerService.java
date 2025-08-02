package com.example.CRUD.service;


import com.example.CRUD.entity.Customer;
import com.example.CRUD.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;


    public Customer postCustomer (Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomer(){
        return customerRepository.findAll();
    }

    public Customer getCustomerById (long id){
        return customerRepository.findById(id).orElse(null);
    }

    public Customer updateCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public void deleteCustomer(long id){
        customerRepository.deleteById(id);

    }
}
