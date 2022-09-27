package com.common.DoYouKnow.controller;

import com.common.DoYouKnow.service.HigherLowerService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Api(tags = "더많이더적게")
@RequestMapping("/higherlower")
public class HigherLowerController {

    private final HigherLowerService higherLowerService;

    @ApiOperation(value = "더많이더적게 최신날짜 업데이트")
    @PostMapping()
    public ResponseEntity<?> updateHigherLower(){
        higherLowerService.updateHigherLower();
        return ResponseEntity.status(HttpStatus.OK).body("update dataset");
    }

    @ApiOperation(value = "더많이더적게 랜덤으로 가져오기")
    @GetMapping()
    public ResponseEntity<?> getHigherLower(){
        return ResponseEntity.status(HttpStatus.OK).body(higherLowerService.getHigherLower());
    }
}
