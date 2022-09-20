package com.common.DoYouKnow.domain.entity;

import lombok.*;

import javax.persistence.*;

/**
 * 모델 간 공통 사항 정의.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
