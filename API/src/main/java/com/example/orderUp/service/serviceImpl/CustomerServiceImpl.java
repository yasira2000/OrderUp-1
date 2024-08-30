package com.example.orderUp.service.serviceImpl;

import com.example.orderUp.dto.CustomerDTO;
import com.example.orderUp.entity.Customer;
import com.example.orderUp.repository.CustomerRepository;
import com.example.orderUp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return customerRepository.findAll().stream()
                .map(customer -> CustomerDTO.builder()
                        .customerId(customer.getCustomerId())
                        .name(customer.getName())
                        .phoneNumber(customer.getPhoneNumber())
                        .email(customer.getEmail())
                        .build())
                .collect(Collectors.toList());
    }


    @Override
    public CustomerDTO getCustomerById(Long id) {
        Optional<Customer> customer = customerRepository.findById(id);
        if(customer.isPresent()){
            Customer c = customer.get();
            return CustomerDTO.builder()
                    .customerId(c.getCustomerId())
                    .name(c.getName())
                    .email(c.getEmail())
                    .phoneNumber(c.getPhoneNumber())
                    .build();

        }
        return null;
    }

    @Override
    public CustomerDTO saveCustomer(CustomerDTO customerDTO) {
        Customer customer = Customer.builder()
                .customerId(customerDTO.getCustomerId())
                .email(customerDTO.getEmail())
                .name(customerDTO.getName())
                .phoneNumber(customerDTO.getPhoneNumber())
                .build();

        Customer savedCustomer = customerRepository.save(customer);

        return CustomerDTO.builder()
                .customerId(savedCustomer.getCustomerId())
                .email(savedCustomer.getEmail())
                .name(savedCustomer.getName())
                .phoneNumber(savedCustomer.getPhoneNumber())
                .build();
    }

    @Override
    public CustomerDTO updateCustomer(Long id, CustomerDTO customerDTO) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        if (optionalCustomer.isPresent()) {
            Customer customer = optionalCustomer.get();
            customer.setName(customerDTO.getName());
            customer.setPhoneNumber(customerDTO.getPhoneNumber());
            customer.setEmail(customerDTO.getEmail());
            Customer updatedCustomer = customerRepository.save(customer);
            return CustomerDTO.builder()
                    .customerId(updatedCustomer.getCustomerId())
                    .name(updatedCustomer.getName())
                    .phoneNumber(updatedCustomer.getPhoneNumber())
                    .email(updatedCustomer.getEmail())
                    .build();
        }
        return null;
    }

    @Override
    public boolean deleteCustomer(Long id) {
        if(customerRepository.existsById(id)){
            customerRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
