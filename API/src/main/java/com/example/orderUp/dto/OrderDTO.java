package com.example.orderUp.dto;

import com.example.orderUp.entity.Order;
import com.example.orderUp.entity.OrderStatus;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class OrderDTO {
    private Long orderId;
    private Date orderDate;
    private OrderStatus status;
    private Long tableId;

}
