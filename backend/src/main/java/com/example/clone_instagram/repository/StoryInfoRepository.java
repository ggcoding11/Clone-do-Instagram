package com.example.clone_instagram.repository;

import com.example.clone_instagram.model.StoryInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryInfoRepository extends JpaRepository<StoryInfo, Long> {
}
