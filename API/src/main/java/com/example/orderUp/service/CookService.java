package com.example.orderUp.service;

import com.example.orderUp.dto.CookDTO;

import java.util.List;

public interface CookService {
    List<CookDTO> getAllCooks();
    CookDTO getCookById(Long id);
    CookDTO saveCook(CookDTO cookDTO);
    CookDTO updateCook(Long id, CookDTO cookDTO);
    boolean deleteCook(Long id);
}
