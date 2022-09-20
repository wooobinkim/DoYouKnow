package com.common.DoYouKnow.service;
import com.common.DoYouKnow.domain.entity.Keyword;
import com.common.DoYouKnow.domain.repository.KeywordRepository;
import com.common.DoYouKnow.dto.KeywordResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class KeywordServiceImpl implements KeywordService {

    private final KeywordRepository keywordRepository;


    @Override
    public List<KeywordResponse> getlist() {
        List<Keyword> keywords = keywordRepository.findAll();
        return keywords.stream().map(k-> KeywordResponse.response(k)).collect(Collectors.toList());
    }
}
