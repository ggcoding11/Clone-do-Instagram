package com.example.clone_instagram.controller;

import com.example.clone_instagram.model.Story;
import com.example.clone_instagram.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/stories")
public class StoryController {
    @Autowired
    private StoryService service;

    @GetMapping
    public List<Story> listarTodos() {
        return service.listarTodos();
    }
}
