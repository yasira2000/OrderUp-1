package com.example.orderUp.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CustomerDTO {
    private Long customerId;
    private String name;
    private String phoneNumber;
    private String email;
}
