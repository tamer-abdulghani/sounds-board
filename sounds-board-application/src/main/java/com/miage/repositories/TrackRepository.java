/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miage.repositories;

import com.miage.models.Track;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Tamer
 */
public interface TrackRepository extends JpaRepository<Track, Integer> {

    @Query("select DISTINCT t from Track t "
            + "join fetch t.contexts as c1 "
            + "join fetch t.categories as c2 "
            + "where t.name like %:keyword% OR "
            + " c1.name like %:keyword% OR "
            + " c2.name like %:keyword%")
    List<Track> findTracksByKeyword(@Param("keyword") String keyword);
}
