package com.common.DoYouKnow.service;
import com.common.DoYouKnow.domain.entity.Category;
import com.common.DoYouKnow.domain.entity.Keyword;
import com.common.DoYouKnow.domain.entity.Nation;
import com.common.DoYouKnow.domain.repository.CategoryRepository;
import com.common.DoYouKnow.domain.repository.KeywordRepository;
import com.common.DoYouKnow.domain.repository.NationRepository;
import com.common.DoYouKnow.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class KeywordServiceImpl implements KeywordService {

    private final KeywordRepository keywordRepository;
    private final NationRepository nationRepository;
    private final CategoryRepository categoryRepository;

    @PersistenceContext
    EntityManager em;

    @Override
    public List<KeywordResponse> getlist() {
        List<Keyword> keywords = keywordRepository.findAll();
        return keywords.stream().map(k-> KeywordResponse.response(k)).collect(Collectors.toList());
    }

    @Override
    public List<NationResponse> getNations() {
        List<Nation> nations = nationRepository.findAll();
        return nations.stream().map(k-> NationResponse.response(k)).collect(Collectors.toList());
    }

    @Override
    public List<CategoryResponse> getCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream().map(k->CategoryResponse.response(k)).collect(Collectors.toList());
    }

    @Override
    public List<KeywordDataResponse> getPeriodKeyword(Long nation_id, Long category_id, Long period) {

        LocalDateTime now =LocalDateTime.now();
        LocalDate endDate = now.toLocalDate();

        Date ndate = java.sql.Date.valueOf(endDate);
        LocalDateTime before = now.minusMonths(period);
        LocalDate startDate = before.toLocalDate();

        Date sdate = java.sql.Date.valueOf(startDate);
        //List<Keyword> keywords = keywordRepository.priodKeyword(sdate,ndate);
        //return keywords.stream().map(k->KeywordResponse.response(k)).collect(Collectors.toList());
        List<KeywordDataResponse> keywordDataResponses = new ArrayList<>();
        List<KeywordDataInter> keywordDataInters = keywordRepository.priodKeyword(sdate, ndate);
        keywordDataInters.forEach((keywordData)->{
            KeywordDataResponse keywordDataResponse = KeywordDataResponse.builder().name(keywordData.getName()).count(keywordData.getCount()).build();
            keywordDataResponses.add(keywordDataResponse);
        });
        return keywordDataResponses;
    }


}
