package com.example.orderUp.service.serviceImpl;


import com.example.orderUp.dto.OrderDTO;
import com.example.orderUp.entity.Order;
import com.example.orderUp.entity.RestaurantTable;
import com.example.orderUp.repository.OrderRepository;
import com.example.orderUp.repository.TableRepository;
import com.example.orderUp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private TableRepository tableRepository;


    @Override
    public List<OrderDTO> getALlOrders() {
        return orderRepository.findAll().stream()
                .map(order -> OrderDTO.builder()
                        .orderId(order.getOrderId())
                        .orderDate(order.getOrderDate())
                        .status(order.getStatus())
                        .tableId(order.getRestaurantTable()!=null? order.getRestaurantTable().getTableId(): null)
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public OrderDTO getOrderById(Long id) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        if(optionalOrder.isPresent()){
            Order order = optionalOrder.get();
            return OrderDTO.builder()
                    .orderId(order.getOrderId())
                    .orderDate(order.getOrderDate())
                    .status(order.getStatus())
                    .tableId(order.getRestaurantTable()!=null? order.getRestaurantTable().getTableId():null)
                    .build();
        }
        return null;
    }

    @Override
    public OrderDTO saveOrder(OrderDTO orderDTO) {
        RestaurantTable restaurantTable = orderDTO.getTableId()!=null? tableRepository.findById(orderDTO.getTableId()).orElse(null) :null;
        Order order = Order.builder()
                .orderDate(orderDTO.getOrderDate())
                .status(orderDTO.getStatus())
                .restaurantTable(restaurantTable)
                .build();


        Order savedOrder = orderRepository.save(order);

        return OrderDTO.builder()
                .orderId(savedOrder.getOrderId())
                .orderDate(savedOrder.getOrderDate())
                .status(savedOrder.getStatus())
                .tableId(savedOrder.getRestaurantTable()!=null? savedOrder.getRestaurantTable().getTableId():null )
                .build();
    }

    @Override
    public OrderDTO updateOrder(Long id, OrderDTO orderDTO) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            order.setOrderDate(orderDTO.getOrderDate());
            order.setStatus(orderDTO.getStatus());
            order.setRestaurantTable(orderDTO.getTableId()!=null? tableRepository.findById(orderDTO.getTableId()).orElse(null):null);

            Order updatedOrder = orderRepository.save(order);

            return OrderDTO.builder()
                    .orderId(updatedOrder.getOrderId())
                    .orderDate(updatedOrder.getOrderDate())
                    .status(updatedOrder.getStatus())
                    .tableId(updatedOrder.getRestaurantTable() != null ? updatedOrder.getRestaurantTable().getTableId() : null)
                    .build();
        }
        return null;

    }

    @Override
    public boolean deleteOrder(Long id) {
        if(orderRepository.existsById(id)){
            orderRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
