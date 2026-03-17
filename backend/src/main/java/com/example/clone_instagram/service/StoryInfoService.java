package com.example.clone_instagram.service;

import com.example.clone_instagram.model.StoryInfo;
import com.example.clone_instagram.repository.StoryInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoryInfoService {
    @Autowired
    private StoryInfoRepository repository;

    public List<StoryInfo> listarTodos() {
        return repository.findAll();
    }

    public StoryInfo criar(StoryInfo s) {
        return repository.save(s);
    }
}
