package com.example.orderUp.service;

import com.example.orderUp.dto.WaiterDTO;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface WaiterService {
    List<WaiterDTO> getAllWaiters();
    WaiterDTO getWaiterById(Long id);
    WaiterDTO saveWaiter(WaiterDTO waiterDTO);
    WaiterDTO updateWaiter(Long id, WaiterDTO waiterDTO);
    boolean deleteWaiter(Long id);






}
