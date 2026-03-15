package com.example.clone_instagram.service;

import com.example.clone_instagram.model.Story;
import com.example.clone_instagram.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoryService {
    @Autowired
    private StoryRepository repository;

    public List<Story> listarTodos() {
        return repository.findAll();
    }
}
