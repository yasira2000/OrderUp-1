package com.example.orderUp.service.serviceImpl;

import com.example.orderUp.dto.CookDTO;
import com.example.orderUp.entity.Cook;
import com.example.orderUp.entity.OrderItem;
import com.example.orderUp.repository.CookRepository;
import com.example.orderUp.repository.ItemRepository;
import com.example.orderUp.service.CookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.ArrayList;

@Service
public class CookServiceImpl implements CookService {

    @Autowired
    private CookRepository cookRepository;

    @Autowired
    private ItemRepository orderItemRepository;

    @Override
    public List<CookDTO> getAllCooks() {
        return cookRepository.findAll().stream()
                .map(cook -> CookDTO.builder()
                        .cookId(cook.getCookId())
                        .name(cook.getName())
                        .orderItemIds(cook.getOrderItems() != null ?
                                cook.getOrderItems().stream().map(OrderItem::getItemId).collect(Collectors.toList())
                                : null)
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public CookDTO getCookById(Long id) {
        Optional<Cook> optionalCook = cookRepository.findById(id);
        if (optionalCook.isPresent()) {
            Cook cook = optionalCook.get();
            return CookDTO.builder()
                    .cookId(cook.getCookId())
                    .name(cook.getName())
                    .orderItemIds(cook.getOrderItems() != null ?
                            cook.getOrderItems().stream().map(OrderItem::getItemId).collect(Collectors.toList())
                            : null)
                    .build();
        }
        return null;
    }

    @Override
    public CookDTO saveCook(CookDTO cookDTO) {
        List<OrderItem> orderItems = cookDTO.getOrderItemIds() != null ?
                orderItemRepository.findAllById(cookDTO.getOrderItemIds()) : new ArrayList<>();
        Cook cook = Cook.builder()
                .name(cookDTO.getName())
                .orderItems(orderItems)
                .build();
        Cook savedCook = cookRepository.save(cook);
        return CookDTO.builder()
                .cookId(savedCook.getCookId())
                .name(savedCook.getName())
                .orderItemIds(savedCook.getOrderItems() != null ?
                        savedCook.getOrderItems().stream().map(OrderItem::getItemId).collect(Collectors.toList())
                        : null)
                .build();
    }

    @Override
    public CookDTO updateCook(Long id, CookDTO cookDTO) {
        Optional<Cook> optionalCook = cookRepository.findById(id);
        if (optionalCook.isPresent()) {
            Cook cook = optionalCook.get();
            cook.setName(cookDTO.getName());
            List<OrderItem> orderItems = cookDTO.getOrderItemIds() != null ?
                    orderItemRepository.findAllById(cookDTO.getOrderItemIds()) : new ArrayList<>();
            cook.setOrderItems(orderItems);
            Cook updatedCook = cookRepository.save(cook);
            return CookDTO.builder()
                    .cookId(updatedCook.getCookId())
                    .name(updatedCook.getName())
                    .orderItemIds(updatedCook.getOrderItems() != null ?
                            updatedCook.getOrderItems().stream().map(OrderItem::getItemId).collect(Collectors.toList())
                            : null)
                    .build();
        }
        return null;
    }

    @Override
    public boolean deleteCook(Long id) {
        if (cookRepository.existsById(id)) {
            cookRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
