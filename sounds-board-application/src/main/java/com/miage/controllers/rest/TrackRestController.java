/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miage.controllers.rest;

import com.miage.models.Track;
import com.miage.repositories.TrackRepository;
import com.miage.viewmodels.TrackItem;
import com.miage.viewmodels.TrackViewModel;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Tamer
 */
@RestController
@RequestMapping("/track")
public class TrackRestController {

    @Autowired
    private TrackRepository tracksRepository;

    @GetMapping("/{keyword}")
    public List<Track> getAllTracks(@PathVariable String keyword) {

        if (keyword != null && !"all".equals(keyword)) {
            System.out.println("" + keyword);
            List<Track> list = tracksRepository.findTracksByKeyword(keyword);
            System.out.println("fd" + list.get(0));
            return list;
        }
        return tracksRepository.findAll();
    }
}
