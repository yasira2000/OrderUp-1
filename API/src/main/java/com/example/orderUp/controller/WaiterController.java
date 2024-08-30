package com.example.orderUp.controller;

import com.example.orderUp.dto.WaiterDTO;
import com.example.orderUp.service.TableService;
import com.example.orderUp.service.WaiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/waiters")
public class WaiterController {

    @Autowired
    private WaiterService waiterService;

    @GetMapping
    public List<WaiterDTO> getAllWaiters(){
        return waiterService.getAllWaiters();
    }
    @GetMapping("/{id}")
    public ResponseEntity<WaiterDTO> getWaiterById(@PathVariable Long id){
        WaiterDTO waiterDTO =  waiterService.getWaiterById(id);
        if (waiterDTO!=null){
            return ResponseEntity.ok(waiterDTO);

        }
        return ResponseEntity.notFound().build();

    }

    @PostMapping("/addwaiter")
    public ResponseEntity<WaiterDTO> saveWaiter(@RequestBody WaiterDTO waiterDTO){
        WaiterDTO savedWaiterDTO = waiterService.saveWaiter(waiterDTO);
        if (savedWaiterDTO!=null){
            return ResponseEntity.ok(savedWaiterDTO);

        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<WaiterDTO> updateWaiter(@PathVariable Long id, @RequestBody WaiterDTO waiterDTO){
        WaiterDTO updatedWaiterDTO = waiterService.updateWaiter(id,waiterDTO);
        if (updatedWaiterDTO!=null){
            return ResponseEntity.ok(updatedWaiterDTO);

        }
        return ResponseEntity.notFound().build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWaiter(@PathVariable Long id){
        boolean isDeleted = waiterService.deleteWaiter(id);
        if(isDeleted){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

}
