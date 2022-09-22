package com.common.DoYouKnow.service;
import com.common.DoYouKnow.domain.entity.Category;
import com.common.DoYouKnow.domain.entity.Keyword;
import com.common.DoYouKnow.domain.entity.Nation;
//import com.common.DoYouKnow.domain.entity.QKeyword;
import com.common.DoYouKnow.domain.repository.CategoryRepository;
import com.common.DoYouKnow.domain.repository.KeywordCustomRepository;
import com.common.DoYouKnow.domain.repository.NationRepository;
import com.common.DoYouKnow.dto.*;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class KeywordServiceImpl implements KeywordService {

    private final KeywordCustomRepository keywordCustomRepository;
    private final NationRepository nationRepository;
    private final CategoryRepository categoryRepository;



//    @Override
//    public List<KeywordResponse> getlist() {
//        List<Keyword> keywords = keywordCustomRepository.findAll();
//        return keywords.stream().map(k-> KeywordResponse.response(k)).collect(Collectors.toList());
//    }
//
//    @Override
//    public List<NationResponse> getNations() {
//        List<Nation> nations = nationRepository.findAll();
//        return nations.stream().map(k-> NationResponse.response(k)).collect(Collectors.toList());
//    }
//
//    @Override
//    public List<CategoryResponse> getCategories() {
//        List<Category> categories = categoryRepository.findAll();
//        return categories.stream().map(k->CategoryResponse.response(k)).collect(Collectors.toList());
//    }

    @Override
    public List<KeywordDataResponse> getPeriodKeyword(Long nation_id, Long category_id, Long period) {
        keywordCustomRepository.periodKeyword(nation_id, category_id, period);


//        List<KeywordDataResponse> keywordDataResponses = new ArrayList<>();
//        List<KeywordDataInter> keywordDataInters = keywordRepository.periodKeyword(sdate, ndate ,PageRequest.of(0,5));
//        keywordDataInters.forEach((keywordData)->{
//            KeywordDataResponse keywordDataResponse = KeywordDataResponse.builder().name(keywordData.getName()).count(keywordData.getCount()).build();
//            keywordDataResponses.add(keywordDataResponse);
//        });
//        return keywordDataResponses;
        return null;
    }
//    @Override
//    public List<KeywordResponse> getPeriodGraph(String keyword, Long nation_id, Long category_id, Long period) {
//        LocalDateTime now =LocalDateTime.now();
//        LocalDate endDate = now.toLocalDate();
//        Date ndate = java.sql.Date.valueOf(endDate);
//        Date sdate = getSdate(now,period);
//        List<Keyword> keywords = keywordCustomRepository.PeriodGraph(keyword,sdate,ndate);
//
//        return keywords.stream().map(k-> KeywordResponse.response(k)).collect(Collectors.toList());
//    }
//
//
//    private Date getSdate(LocalDateTime now, Long period) {
//        if(period==0){
//            LocalDateTime before = now.minusDays(7);
//            LocalDate startDate = before.toLocalDate();
//            return java.sql.Date.valueOf(startDate);
//        }
//        else if(period!=0) {
//            LocalDateTime before = now.minusMonths(period);
//            LocalDate startDate = before.toLocalDate();
//            return java.sql.Date.valueOf(startDate);
//        }
//        return null;
//    }



}
