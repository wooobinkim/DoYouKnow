package com.common.DoYouKnow.controller;

import com.common.DoYouKnow.service.HigherLowerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/higherlower")
public class HigherLowerController {

    private final HigherLowerService higherLowerService;

    @PostMapping()
    public ResponseEntity<?> updateHigherLower(){
        higherLowerService.updateHigherLower();
        return ResponseEntity.status(HttpStatus.OK).body("update dataset");
    }

    @GetMapping()
    public ResponseEntity<?> getHigherLower(){
        return ResponseEntity.status(HttpStatus.OK).body(higherLowerService.getHigherLower());
    }
}
