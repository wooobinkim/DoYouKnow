package com.common.DoYouKnow.controller;

import com.common.DoYouKnow.service.KeywordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/keyword")
public class KeywordController {
    private final KeywordService keywordService;

    @GetMapping()
    public ResponseEntity<?> getKeywords(){
        return ResponseEntity.status(HttpStatus.OK).body(keywordService.getlist());
    }

}
