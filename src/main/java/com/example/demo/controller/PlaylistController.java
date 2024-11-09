package com.example.demo.controller;

import com.example.demo.model.Playlist;
import com.example.demo.model.Song;
import com.example.demo.repository.PlaylistRepository;
import com.example.demo.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@Controller
@RequestMapping("/playlist")
public class PlaylistController {
    @Autowired
    private PlaylistRepository playlistRepository;

    @Autowired
    private SongRepository songRepository;

    @GetMapping
    public String showPlaylist(Model model) {
        // Lấy danh sách playlist từ database
        List<Playlist> playlists = playlistRepository.findAll();
        model.addAttribute("playlists", playlists); // Đưa vào Model để Thymeleaf có thể sử dụng
        return "playlist"; // Trả về view "playlist.html"
    }


    @PostMapping("/add-to-playlist")
    @ResponseBody  // Để trả về dữ liệu JSON
    public ResponseEntity<String> addSongToPlaylist(@RequestBody Map<String, Object> payload) {
        String songName = (String) payload.get("name");
        String songUrl = (String) payload.get("link");
        Long playlistId = ((Number) payload.get("playlistId")).longValue();

        Playlist playlist = playlistRepository.findById(playlistId).orElse(null);
        if (playlist == null) {
            return ResponseEntity.badRequest().body("Playlist không tồn tại.");
        }

        Song song = new Song();
        song.setName(songName);
        song.setLink(songUrl);
        song.setPlaylist(playlist);  // Thiết lập khóa ngoại

        songRepository.save(song);

        return ResponseEntity.ok("Bài hát đã được thêm vào playlist.");
    }
}







