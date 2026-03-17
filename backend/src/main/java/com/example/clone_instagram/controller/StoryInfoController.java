package com.example.clone_instagram.controller;

import com.example.clone_instagram.model.StoryInfo;
import com.example.clone_instagram.service.StoryInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public StoryInfo criar(@RequestBody StoryInfo s) {
        return service.criar(s);
    }
}
