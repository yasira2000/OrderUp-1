package com.example.orderUp.service.serviceImpl;

import com.example.orderUp.dto.WaiterDTO;
import com.example.orderUp.entity.Waiter;
import com.example.orderUp.repository.WaiterRepository;
import com.example.orderUp.service.WaiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class WaiterServiceImpl implements WaiterService {

    @Autowired
    private WaiterRepository waiterRepository;

    @Override
    public List<WaiterDTO> getAllWaiters() {
        return waiterRepository.findAll().stream()
                .map(waiter -> WaiterDTO.builder()
                        .waiterId(waiter.getWaiterId())
                        .name(waiter.getName())
                        .phoneNumber(waiter.getPhoneNumber())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public WaiterDTO getWaiterById(Long id) {
        Optional<Waiter> waiter = waiterRepository.findById(id);
        if(waiter.isPresent()){
            Waiter w = waiter.get();
            return WaiterDTO.builder()
                    .waiterId(w.getWaiterId())
                    .name(w.getName())
                    .phoneNumber(w.getPhoneNumber())
                    .build();
        }
        return null;
    }

    @Override
    public WaiterDTO saveWaiter(WaiterDTO waiterDTO) {
        Waiter waiter = Waiter.builder()
                .waiterId(waiterDTO.getWaiterId())
                .name(waiterDTO.getName())
                .phoneNumber(waiterDTO.getPhoneNumber())
                .build();
        Waiter savedWaiter = waiterRepository.save(waiter);

        return WaiterDTO.builder()
                .waiterId(savedWaiter.getWaiterId())
                .name(savedWaiter.getName())
                .phoneNumber(savedWaiter.getPhoneNumber())
                .build();
    }

    @Override
    public WaiterDTO updateWaiter(Long id, WaiterDTO waiterDTO) {
        Optional<Waiter> optionalWaiter= waiterRepository.findById(id);
        if(optionalWaiter.isPresent()){
            Waiter waiter = optionalWaiter.get();
            waiter.setName(waiterDTO.getName());
            waiter.setPhoneNumber(waiterDTO.getPhoneNumber());

            return WaiterDTO.builder()
                    .waiterId(waiter.getWaiterId())
                    .name(waiter.getName())
                    .phoneNumber(waiter.getPhoneNumber())
                    .build();

        }

        return null;

    }

    @Override
    public boolean deleteWaiter(Long id) {
        if(waiterRepository.existsById(id)){
            waiterRepository.deleteById(id);
            return true;
        }
        return false;

    }
}
