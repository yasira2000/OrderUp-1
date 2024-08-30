package com.example.orderUp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "cook")
public class Cook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cook_id")
    private Long cookId;

    @Column(name = "name")
    private String name;

    @ManyToMany
    @JoinTable(
            name = "cook_orderitem",
            joinColumns = @JoinColumn(name = "cook_id"),
            inverseJoinColumns = @JoinColumn(name = "orderitem_id")
    )
    private List<OrderItem> orderItems = new ArrayList<>();




}
