package com.common.DoYouKnow.domain.repository;

import com.common.DoYouKnow.domain.entity.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KeywordRepository extends JpaRepository<Keyword, Long> {
}