package com.example.orderUp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "restaurant_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long orderId;

    @Column(name = "order_date")
    private Date orderDate;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @ManyToOne
    @JoinColumn(name = "table_id", nullable = false)
    private RestaurantTable restaurantTable;
}
