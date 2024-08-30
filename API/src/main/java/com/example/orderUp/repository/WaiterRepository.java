package com.example.orderUp.repository;

import com.example.orderUp.entity.Waiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaiterRepository extends JpaRepository<Waiter,Long> {
}
