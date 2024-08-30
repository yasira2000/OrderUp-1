package com.example.orderUp.controller;

import com.example.orderUp.dto.TableDTO;
import com.example.orderUp.service.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tables")
public class TableController {

    @Autowired
    private TableService tableService;

    @GetMapping
    public List<TableDTO> getAllTables() {
        return tableService.getAllTables();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TableDTO> getTableById(@PathVariable Long id) {
        TableDTO tableDTO = tableService.getTableById(id);
        if (tableDTO != null) {
            return ResponseEntity.ok(tableDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public TableDTO saveTable(@RequestBody TableDTO tableDTO) {
        return tableService.saveTable(tableDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TableDTO> updateTable(@PathVariable Long id, @RequestBody TableDTO tableDTO) {
        TableDTO updatedTable = tableService.updateTable(id, tableDTO);
        if (updatedTable != null) {
            return ResponseEntity.ok(updatedTable);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable(@PathVariable Long id) {
        boolean isDeleted = tableService.deleteTable(id);
        if (isDeleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
