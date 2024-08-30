package com.example.orderUp.service;

import com.example.orderUp.dto.ItemDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ItemService {
    List<ItemDTO> getALLItems();
    ItemDTO getItemById(Long id);
    ItemDTO saveItem(ItemDTO itemDTO);
    ItemDTO updateItem(Long id, ItemDTO itemDTO);
    boolean deleteItem(Long id);
}
