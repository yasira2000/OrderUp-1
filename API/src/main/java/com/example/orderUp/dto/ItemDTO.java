package com.example.orderUp.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ItemDTO {
    private Long itemId;
    private String name;
    private List<String> ingredients;
    private Long orderId;

}
