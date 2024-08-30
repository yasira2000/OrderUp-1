package com.example.orderUp.service.serviceImpl;

import com.example.orderUp.dto.ItemDTO;
import com.example.orderUp.entity.Order;
import com.example.orderUp.entity.OrderItem;
import com.example.orderUp.repository.ItemRepository;
import com.example.orderUp.repository.OrderRepository;
import com.example.orderUp.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<ItemDTO> getALLItems() {
        return itemRepository.findAll().stream()
                .map(orderItem -> ItemDTO.builder()
                        .itemId(orderItem.getItemId())
                        .name(orderItem.getName())
                        .ingredients(orderItem.getIngredients())
                        .orderId(orderItem.getOrder()!=null?orderItem.getOrder().getOrderId():null)
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public ItemDTO getItemById(Long id) {
        Optional<OrderItem> optionalItem = itemRepository.findById(id);
        if(optionalItem.isPresent()){
            OrderItem item = optionalItem.get();
            return ItemDTO.builder()
                    .itemId(item.getItemId())
                    .name(item.getName())
                    .ingredients(item.getIngredients())
                    .orderId(item.getOrder()!=null? item.getOrder().getOrderId():null)
                    .build();
        }
        return null;
    }

    @Override
    public ItemDTO saveItem(ItemDTO itemDTO) {
        Order order = itemDTO.getOrderId()!=null? orderRepository.findById(itemDTO.getOrderId()).orElse(null):null;
        OrderItem orderItem = OrderItem.builder()
                .itemId(itemDTO.getItemId())
                .name(itemDTO.getName())
                .ingredients(itemDTO.getIngredients())
                .order(order)
                .build();

        OrderItem savedItem = itemRepository.save(orderItem);

        return ItemDTO.builder()
                .itemId(savedItem.getItemId())
                .name(savedItem.getName())
                .ingredients(savedItem.getIngredients())
                .orderId(savedItem.getOrder()!=null ? savedItem.getOrder().getOrderId():null)
                .build();
    }

    @Override
    public ItemDTO updateItem(Long id, ItemDTO itemDTO) {
        Order order = itemDTO.getOrderId()!=null? orderRepository.findById(itemDTO.getOrderId()).orElse(null):null;
        Optional<OrderItem> optionalItem = itemRepository.findById(id);
        if(optionalItem.isPresent()){
            OrderItem item = optionalItem.get();
            item.setName(itemDTO.getName());
            item.setIngredients(itemDTO.getIngredients());
            item.setOrder(order);

            OrderItem updatedItem = itemRepository.save(item);
            return ItemDTO.builder()
                    .itemId(updatedItem.getItemId())
                    .name(updatedItem.getName())
                    .ingredients(updatedItem.getIngredients())
                    .orderId(updatedItem.getOrder()!=null? updatedItem.getOrder().getOrderId():null)
                    .build();
        }
        return null;

    }

    @Override
    public boolean deleteItem(Long id) {
        if(itemRepository.existsById(id)){
            itemRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
