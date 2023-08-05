package com.kkosunnae.deryeogage.domain.adopt;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AdoptRepository extends JpaRepository<AdoptEntity, Integer> {

    // 분양내역 가져오기
    List<AdoptEntity> findByFromUserId(Long userId);

    // 입양내역 가져오기
    List<AdoptEntity> findByToUserId(Long userId);

}