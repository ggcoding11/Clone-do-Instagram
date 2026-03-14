package com.example.clone_instagram.controller;

import com.example.clone_instagram.model.Post;
import com.example.clone_instagram.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {
    @Autowired
    private PostService service;

    @GetMapping
    public List<Post> listarTodos() {
        return service.listarTodos();
    }
}
