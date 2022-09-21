package com.common.DoYouKnow.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class KeywordDataResponse {
    private String name;
    private String count;
}
