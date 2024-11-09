package com.example.demo.repository;

import com.example.demo.model.Playlist;
import com.example.demo.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, Long> {

    List<Song> findTop3ByOrderByIdAsc();


    @Query(value = "SELECT * FROM playlist ORDER BY RAND()", nativeQuery = true)
    List<Song> findTop3Random();
    List<Song> findByNameContainingIgnoreCase(String name);
}
