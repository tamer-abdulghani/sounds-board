/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miage.viewmodels;

/**
 *
 * @author Tamer
 */
public class TrackItem {

    private String Name;
    private Integer Count;

    public TrackItem(String Name, Integer Count) {
        this.Name = Name;
        this.Count = Count;
    }

    public String getName() {
        return Name;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public Integer getCount() {
        return Count;
    }

    public void setCount(Integer Count) {
        this.Count = Count;
    }
}
