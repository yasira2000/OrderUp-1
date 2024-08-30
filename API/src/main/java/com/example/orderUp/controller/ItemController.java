package com.example.orderUp.controller;

import com.example.orderUp.dto.ItemDTO;
import com.example.orderUp.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<ItemDTO> getAllItems(){
        return itemService.getALLItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemDTO> getItemById(@PathVariable Long id){
        ItemDTO itemDTO = itemService.getItemById(id);
        if(itemDTO!=null){
            return ResponseEntity.ok(itemDTO);

        }
        return ResponseEntity.notFound().build();

    }

    @PostMapping
    public ResponseEntity<ItemDTO> saveItem(@RequestBody ItemDTO itemDTO){
        ItemDTO savedItemDTO = itemService.saveItem(itemDTO);
        if (savedItemDTO!=null){
            return ResponseEntity.ok(savedItemDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItemDTO> updateItem(@PathVariable Long id, @RequestBody ItemDTO itemDTO){
        ItemDTO updatedItem = itemService.updateItem(id,itemDTO);
        if(updatedItem!=null){
            return ResponseEntity.ok(updatedItem);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id){
        boolean isDeleted = itemService.deleteItem(id);
        if(isDeleted){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
