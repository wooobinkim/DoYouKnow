package com.common.DoYouKnow.domain.repository;

import com.common.DoYouKnow.domain.entity.Keyword;
import com.common.DoYouKnow.dto.HigherLowerResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface KeywordRepository extends JpaRepository<Keyword,Long> {
    @Query(value = "select k.name, sum(k.count) from Keyword k group by k.name order by rand()", nativeQuery = true)
    List<HigherLowerResponse> getHigherLower();
}
