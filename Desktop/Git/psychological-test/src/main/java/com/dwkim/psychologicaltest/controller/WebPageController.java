package com.dwkim.psychologicaltest.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
public class WebPageController {

    @RequestMapping("/")
    public String mainPage(){
        return "home";
    }
}
