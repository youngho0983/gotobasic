package com.syh.gotobasic.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {


    @GetMapping("/")
    public String test() {
        return "Hello World!";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello World!";
    }

}
