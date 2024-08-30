package com.example.orderUp.service.serviceImpl;

import com.example.orderUp.dto.TableDTO;
import com.example.orderUp.entity.RestaurantTable;
import com.example.orderUp.entity.Waiter;
import com.example.orderUp.repository.TableRepository;
import com.example.orderUp.repository.WaiterRepository;
import com.example.orderUp.service.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TableServiceImpl implements TableService {

    @Autowired
    private TableRepository tableRepository;

    @Autowired
    private WaiterRepository waiterRepository;


    @Override
    public List<TableDTO> getAllTables() {
        return tableRepository.findAll().stream()
                .map(restaurantTable -> TableDTO.builder()
                        .tableId(restaurantTable.getTableId())
                        .url(restaurantTable.getUrl())
                        .waiterId(restaurantTable.getWaiter() != null ? restaurantTable.getWaiter().getWaiterId() : null)
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public TableDTO getTableById(Long id) {
        Optional<RestaurantTable> optionalRestaurantTable = tableRepository.findById(id);
        if(optionalRestaurantTable.isPresent()){
            RestaurantTable restaurantTable = optionalRestaurantTable.get();
            return TableDTO.builder()
                    .tableId(restaurantTable.getTableId())
                    .url(restaurantTable.getUrl())
                    .waiterId(restaurantTable.getWaiter()!=null? restaurantTable.getWaiter().getWaiterId():null)
                    .build();
        }
        return null;
    }

    @Override
    public TableDTO saveTable(TableDTO tableDTO) {
        Waiter waiter = tableDTO.getWaiterId() != null ? waiterRepository.findById(tableDTO.getWaiterId()).orElse(null) : null;
        RestaurantTable table = RestaurantTable.builder()
                .tableId(tableDTO.getTableId())
                .url(tableDTO.getUrl())
                .waiter(waiter)
                .build();
        RestaurantTable savedTable = tableRepository.save(table);
        return TableDTO.builder()
                .tableId(savedTable.getTableId())
                .url(savedTable.getUrl())
                .waiterId(savedTable.getWaiter() != null ? savedTable.getWaiter().getWaiterId() : null)
                .build();    }

    @Override
    public TableDTO updateTable(Long id, TableDTO tableDTO) {
        Optional<RestaurantTable> optionalTable = tableRepository.findById(id);
        if(optionalTable.isPresent()){
            RestaurantTable restaurantTable  = optionalTable.get();
            restaurantTable.setUrl(tableDTO.getUrl());
            restaurantTable.setWaiter(tableDTO.getWaiterId()!=null? waiterRepository.findById(tableDTO.getWaiterId()).orElse(null):null);

            RestaurantTable updatedTable = tableRepository.save(restaurantTable);

            return TableDTO.builder()
                    .tableId(updatedTable.getTableId())
                    .url(updatedTable.getUrl())
                    .waiterId(updatedTable.getWaiter()!=null? updatedTable.getWaiter().getWaiterId():null)
                    .build();
        }
        return null;

    }

    @Override
    public boolean deleteTable(Long id) {
        if(tableRepository.existsById(id)){
            tableRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
