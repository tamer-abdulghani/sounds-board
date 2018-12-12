/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miage.models;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author Tamer
 */
@Entity
@Table(name = "tracks")
public class Track {

    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "path")
    private String path;

    @Column(name = "played_count")
    private Integer played_count;

    @ManyToMany
    @JoinTable(
            name = "track_contexts",
            joinColumns = {
                @JoinColumn(name = "track_id")},
            inverseJoinColumns = {
                @JoinColumn(name = "context_id")})
    private Set<Context> contexts = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "track_categories",
            joinColumns = {
                @JoinColumn(name = "track_id")},
            inverseJoinColumns = {
                @JoinColumn(name = "category_id")})
    private Set<Category> categories = new HashSet<>();

    public Track() {
    }

    public Track(Integer id, String name, String path, Integer played_count) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.played_count = played_count;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Integer getPlayed_count() {
        return played_count;
    }

    public void setPlayed_count(Integer played_count) {
        this.played_count = played_count;
    }

    public Set<Context> getContexts() {
        return contexts;
    }

    public void setContexts(Set<Context> contexts) {
        this.contexts = contexts;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

}
