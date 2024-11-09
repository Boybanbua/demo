package com.example.demo.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;

import jakarta.persistence.*;

@Entity
public class Playlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String link;
    private String name;

    // Liên kết một-nhiều với các bài hát
    @OneToMany(mappedBy = "playlist", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Song> songs;

    // Getters và setters
    public Long getId() {
        return id;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Song> getSongs() {
        return songs;
    }

    public void setSongs(List<Song> songs) {
        this.songs = songs;
    }

    public void addSong(Song song) {
        songs.add(song);
        song.setPlaylist(this); // Đặt playlist cho bài hát
    }

    public void removeSong(Song song) {
        songs.remove(song);
        song.setPlaylist(null); // Hủy liên kết playlist của bài hát
    }
}
