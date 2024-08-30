package com.example.orderUp.controller;

import com.example.orderUp.dto.CookDTO;
import com.example.orderUp.service.CookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cooks")
public class CookController {

    @Autowired
    private CookService cookService;

    @GetMapping
    public List<CookDTO> getAllCooks() {
        return cookService.getAllCooks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CookDTO> getCookById(@PathVariable Long id) {
        CookDTO cookDTO = cookService.getCookById(id);
        if (cookDTO != null) {
            return ResponseEntity.ok(cookDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<CookDTO> saveCook(@RequestBody CookDTO cookDTO) {
        CookDTO savedCookDTO = cookService.saveCook(cookDTO);
        if (savedCookDTO != null) {
            return ResponseEntity.ok(savedCookDTO);
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<CookDTO> updateCook(@PathVariable Long id, @RequestBody CookDTO cookDTO) {
        CookDTO updatedCookDTO = cookService.updateCook(id, cookDTO);
        if (updatedCookDTO != null) {
            return ResponseEntity.ok(updatedCookDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCook(@PathVariable Long id) {
        boolean isDeleted = cookService.deleteCook(id);
        if (isDeleted) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
