package com.common.DoYouKnow.domain.repository;

import com.common.DoYouKnow.domain.entity.DYKClub;
import com.common.DoYouKnow.dto.DYKClubResponse;

import java.util.List;

public interface DYKClubCustomRepository {
    List<DYKClubResponse> getDYKClublist(Long category_id);
}
