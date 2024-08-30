package com.example.orderUp.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WaiterDTO {
    public Long waiterId;
    public String name;
    public String phoneNumber;
}
