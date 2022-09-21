package com.common.DoYouKnow.service;

import com.common.DoYouKnow.dto.KeywordResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface KeywordService {
    List<KeywordResponse> getlist();

//    //국가 리스트
//    public ResponseEntity<?> getNations();
//
//    //카테고리 리스트
//    public ResponseEntity<?> getCategories();
//
//    //국가별 카테고리별 주간키워드
//    public ResponseEntity<?> getWeekKeyword(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 1달키워드
//    public ResponseEntity<?> getOneMonthKeyword(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 3달키워드
//    public ResponseEntity<?> getThreeMonthKeyword(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 6달키워드
//    public ResponseEntity<?> getSixMonthKeyword(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 주간키워드 추이
//    public ResponseEntity<?> getWeekGraph(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 1달키워드 추이
//    public ResponseEntity<?> getOneMonthGraph(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 3달키워드 추이
//    public ResponseEntity<?> getThreeMonthGraph(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 6달키워드 추이
//    public ResponseEntity<?> getSixMonthGraph(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 주간 데이터검색량
//    public ResponseEntity<?> getWeekCount(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 1달 데이터검색량
//    public ResponseEntity<?> getOneMonthCount(Long nation_id, Long category_id);
//
//    //국가별 카테고리별 3달 데이터검색량
//    public ResponseEntity<?> getThreeMonthCount(Long nation_id,Long category_id);
//
//    //국가별 카테고리별 6달 데이터검색량
//    public ResponseEntity<?> getSixMonthCount(Long nation_id,Long category_id);
}
