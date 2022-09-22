package com.common.DoYouKnow.domain.repository;

import com.common.DoYouKnow.domain.entity.Keyword;
import com.common.DoYouKnow.domain.entity.QKeyword;
import com.common.DoYouKnow.dto.KeywordDataResponse;
import com.common.DoYouKnow.dto.KeywordResponse;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Repository
public class KeywordCustomRepositoryImpl implements KeywordCustomRepository {

    @PersistenceContext
    EntityManager em;

    public List<KeywordDataResponse> periodKeyword(Long nation_id, Long category_id, Long period) {
        JPAQueryFactory jpaQueryFactory = new JPAQueryFactory(em);
        QKeyword k = new QKeyword("k");

        LocalDateTime now =LocalDateTime.now();
        LocalDate endDate = now.toLocalDate();

        Date ndate = java.sql.Date.valueOf(endDate);
        Date sdate = getSdate(now,period);

        List<Tuple> fetch = jpaQueryFactory
                .select(k.name, k.count.sum())
                .from(k)
//                .selectFrom(k)
                .where(
                        k.date.between(sdate, ndate)
                                .and(k.nation.id.eq(nation_id))
                                .and(k.category.id.eq(category_id))
                )
                .groupBy(k.name)
                .orderBy(k.count.sum().desc())
                .offset(0)
                .limit(5)
                .fetch();

        List<KeywordDataResponse> keywordDataResponseList = fetch.stream().map(
                f->KeywordDataResponse.response(f.get(k.name), f.get(k.count.sum()))
        ).collect(Collectors.toList());

        System.out.println(keywordDataResponseList);
        return null;
    }

    private Date getSdate(LocalDateTime now, Long period) {
        if(period==0){
            LocalDateTime before = now.minusDays(7);
            LocalDate startDate = before.toLocalDate();
            return java.sql.Date.valueOf(startDate);
        }
        else if(period!=0) {
            LocalDateTime before = now.minusMonths(period);
            LocalDate startDate = before.toLocalDate();
            return java.sql.Date.valueOf(startDate);
        }
        return null;
    }
}
