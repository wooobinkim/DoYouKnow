package com.common.DoYouKnow.domain.repository;

import com.common.DoYouKnow.domain.entity.Keyword;
import com.common.DoYouKnow.dto.KeywordDataInter;
import com.common.DoYouKnow.dto.KeywordDataResponse;
import com.common.DoYouKnow.dto.KeywordResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface KeywordRepository extends JpaRepository<Keyword, Long> {
    @Query("select p.name as name,sum(p.count) as count from Keyword p where p.date between :start and :end group by p.name ")
    List<KeywordDataInter> priodKeyword(Date start, Date end);
}