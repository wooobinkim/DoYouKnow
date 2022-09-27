package com.common.DoYouKnow.service;

import com.common.DoYouKnow.domain.repository.KeywordCustomRepository;
import com.common.DoYouKnow.domain.repository.KeywordCustomRepositoryImpl;
import com.common.DoYouKnow.domain.repository.KeywordRepository;
import com.common.DoYouKnow.dto.HigherLowerResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HigherLowerServiceImpl implements HigherLowerService{

    private final KeywordRepository keywordRepository;

    @Override
    @Transactional
    public List<HigherLowerResponse> getHigherLower() {
        List<HigherLowerResponse> higherLowerResponses = keywordRepository.getHigherLower();

        return higherLowerResponses;
    }
}
