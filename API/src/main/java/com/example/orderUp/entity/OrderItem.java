package com.example.orderUp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "order_item")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long itemId;

    @Column(name = "name")
    private String name;

    @ElementCollection
    @CollectionTable(name = "order_item_ingredients", joinColumns = @JoinColumn(name = "item_id"))
    @Column(name = "ingredient")
    private List<String> ingredients;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToMany(mappedBy = "orderItems")
    private List<Cook> cooks;

}
