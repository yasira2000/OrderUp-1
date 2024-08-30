package com.example.orderUp.service;

import com.example.orderUp.dto.TableDTO;

import java.util.List;

public interface TableService {
    List<TableDTO> getAllTables();
    TableDTO getTableById(Long id);
    TableDTO saveTable(TableDTO tableDTO);
    TableDTO updateTable(Long id,TableDTO tableDTO);
    boolean deleteTable(Long id);
}
