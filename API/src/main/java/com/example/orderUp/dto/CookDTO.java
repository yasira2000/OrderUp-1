package com.example.orderUp.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class CookDTO {

    private Long cookId;
    private String name;
    private List<Long> orderItemIds;
}
