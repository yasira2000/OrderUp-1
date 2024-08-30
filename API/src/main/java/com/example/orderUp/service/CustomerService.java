package com.example.orderUp.service;

import com.example.orderUp.dto.CustomerDTO;
import com.example.orderUp.entity.Customer;

import java.util.List;

public interface CustomerService {
    List<CustomerDTO> getAllCustomers();
    CustomerDTO getCustomerById(Long id);
    CustomerDTO saveCustomer(CustomerDTO customerDTO);
    CustomerDTO updateCustomer(Long id, CustomerDTO customerDTO);
    boolean deleteCustomer(Long id);
}
