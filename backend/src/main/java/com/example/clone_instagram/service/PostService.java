package com.example.clone_instagram.service;

import com.example.clone_instagram.model.Post;
import com.example.clone_instagram.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository repository;

    public List<Post> listarTodos() {
        return repository.findAll();
    }
}
