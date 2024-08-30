package com.example.orderUp.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TableDTO {
    private Long tableId;
    private String url;
    private Long waiterId;
}
