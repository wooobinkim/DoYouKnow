package com.common.DoYouKnow.service;

import com.common.DoYouKnow.domain.entity.DYKClub;
import com.common.DoYouKnow.dto.DYKClubResponse;

import java.util.List;

public interface DYKClubService {
    List<DYKClubResponse> getDYKClubs(Long category_id);
}
