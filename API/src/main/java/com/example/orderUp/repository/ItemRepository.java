package com.example.orderUp.repository;

import com.example.orderUp.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<OrderItem,Long> {

}
