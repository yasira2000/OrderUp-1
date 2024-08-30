package com.example.orderUp.repository;

import com.example.orderUp.entity.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableRepository extends JpaRepository<RestaurantTable,Long> {
}
