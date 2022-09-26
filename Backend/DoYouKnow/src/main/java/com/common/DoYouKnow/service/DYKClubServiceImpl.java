package com.common.DoYouKnow.service;

import com.common.DoYouKnow.domain.repository.DYKClubCustomRepository;
import com.common.DoYouKnow.dto.DYKClubResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor

public class DYKClubServiceImpl implements DYKClubService{
    private final DYKClubCustomRepository dykClubCustomRepository;

    @Override
    public List<DYKClubResponse> getDYKClubs(Long category_id) {
        return dykClubCustomRepository.getDYKClublist(category_id);
    }
}
