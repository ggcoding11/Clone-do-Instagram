package com.example.clone_instagram.controller;

import com.example.clone_instagram.model.StoryInfo;
import com.example.clone_instagram.service.StoryInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/storiesInfo")
public class StoryInfoController {
    @Autowired
    private StoryInfoService service;

    @GetMapping
    public List<StoryInfo> listarTodos() {
        return service.listarTodos();
    }
}
