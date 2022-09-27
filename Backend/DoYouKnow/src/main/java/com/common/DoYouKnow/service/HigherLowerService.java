package com.common.DoYouKnow.service;

import com.common.DoYouKnow.dto.HigherLowerResponse;

import java.util.List;


public interface HigherLowerService {
    void updateHigherLower();
    List<HigherLowerResponse> getHigherLower();
}
