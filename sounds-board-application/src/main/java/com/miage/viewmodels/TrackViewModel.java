/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miage.viewmodels;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

/**
 *
 * @author Tamer
 */
public class TrackViewModel {

    private List<TrackItem> children;

    public TrackViewModel() {
        children = new ArrayList<>();
    }

    public List<TrackItem> getChildren() {
        return children;
    }

    public void setChildren(List<TrackItem> children) {
        this.children = children;
    }

    public void addChildren(TrackItem trackItem) {
        this.children.add(trackItem);
    }
}
