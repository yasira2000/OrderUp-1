package com.example.orderUp.controller;

import com.example.orderUp.dto.OrderDTO;
import com.example.orderUp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<OrderDTO> getALlOrders(){
        return orderService.getALlOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable Long id){
        OrderDTO orderDTO = orderService.getOrderById(id);
        if(orderDTO!=null){
            return ResponseEntity.ok(orderDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<OrderDTO> saveOrder(@RequestBody OrderDTO orderDTO){
        OrderDTO savedOrderDTO = orderService.saveOrder(orderDTO);
        if(savedOrderDTO!=null){
            return ResponseEntity.ok(savedOrderDTO);
        }
        return ResponseEntity.notFound().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<OrderDTO> updateOrder(@PathVariable Long id, @RequestBody OrderDTO orderDTO){
        OrderDTO updatedOrderDTO = orderService.updateOrder(id,orderDTO);
        if(updatedOrderDTO!=null){
            return ResponseEntity.ok(updatedOrderDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id){
        boolean isDeleted = orderService.deleteOrder(id);
        if(isDeleted){
            return ResponseEntity.ok().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
}
