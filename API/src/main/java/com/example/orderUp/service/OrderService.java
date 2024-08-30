package com.example.orderUp.service;

import com.example.orderUp.dto.OrderDTO;

import java.util.List;

public interface OrderService {
    List<OrderDTO> getALlOrders();
    OrderDTO getOrderById(Long id);
    OrderDTO saveOrder(OrderDTO orderDTO);
    OrderDTO updateOrder(Long id,OrderDTO orderDTO);
    boolean deleteOrder(Long id);
}
