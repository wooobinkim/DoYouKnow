package com.common.DoYouKnow.domain.repository;

import com.common.DoYouKnow.domain.entity.Keyword;
import com.common.DoYouKnow.dto.KeywordDataInter;
import com.common.DoYouKnow.dto.KeywordDataResponse;
import com.common.DoYouKnow.dto.KeywordResponse;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface KeywordCustomRepository {
//    @Query("select p.name as name,sum(p.count) as count from Keyword p where p.date between :start and :end group by p.name order by sum(p.count) desc")
//    List<KeywordDataInter> periodKeyword(Date start, Date end , PageRequest pageRequest);

//    @Query("select p from Keyword p where p.date between :start and :end and p.name = :keyword order by p.date")
//    List<Keyword> PeriodGraph(String keyword,Date start, Date end);

    List<KeywordDataResponse> periodKeyword(Date sdate,Date ndate,Long nation_id, Long category_id);

    List<Keyword> PeriodGraph(Date sdate,Date ndate,Long nation_id, Long category_id,String keyword);

    Long SearchCount(Long nation_id,Long category_id);

}