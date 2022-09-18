package com.common.DoYouKnow.domain.repository;

import com.common.DoYouKnow.domain.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Long> {
}
