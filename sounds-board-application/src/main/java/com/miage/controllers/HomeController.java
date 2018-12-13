/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miage.controllers;

import com.miage.models.Track;
import com.miage.repositories.TrackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Tamer
 */
@Controller
@RequestMapping("/")
public class HomeController {

    @Autowired
    private TrackRepository tracksRepository;

    @Autowired
    public HomeController() {
    }

    @GetMapping("/")
    public String Home(Model model) {
        return "home";
    }

    @GetMapping("/stage")
    public String Index(Model model) {
        return "index";
    }

    @GetMapping("/trackitem/{id}")
    public String trackitem(Model model, @PathVariable Integer id) {
        Track t = tracksRepository.findById(id).get();
        model.addAttribute("model", t);
        return "track-item";
    }
}
