const mainContent = document.getElementById('mainContent');

// Hàm phát nhạc khi người dùng nhấn Play
async function playSong(songUrl, songName) {
    try {
        // Cập nhật nội dung bên phải với giao diện player
        mainContent.innerHTML = `
            <div class="player-container">
                <h2>Now Playing: ${songName}</h2>
                <audio id="audioPlayer" controls autoplay style="width: 100%;">
                    <source src="${songUrl}" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
                <button onclick="goBack()">Back to Song List</button>
            </div>
        `;

        // Tìm player mới được tạo và phát nhạc
        const audioPlayer = document.getElementById('audioPlayer');
        await audioPlayer.play();  // Phát nhạc tự động
    } catch (error) {
        console.error('Error playing song:', error);
    }
}

// Hàm quay lại danh sách bài hát
function goBack() {
    location.reload();  // Tải lại trang
}





//
//const mainContent = document.getElementById('mainContent');
//
//// Hàm phát nhạc khi người dùng nhấn Play
//async function playSong(songUrl, songName, songId) {
//    try {
//        // Cập nhật nội dung bên phải với giao diện player
//        mainContent.innerHTML = `
//            <div class="player-container">
//                <h2>Now Playing: ${songName}</h2>
//                <audio id="audioPlayer" controls autoplay style="width: 100%;">
//                    <source src="${songUrl}" type="audio/mp3">
//                    Your browser does not support the audio element.
//                </audio>
//                <button onclick="goBack()">Back to Song List</button>
//                <button onclick="addToPlaylist(${songId})">Add to Playlist</button> <!-- Nút thêm vào playlist -->
//            </div>
//        `;
//
//        // Tìm player mới được tạo và phát nhạc
//        const audioPlayer = document.getElementById('audioPlayer');
//        await audioPlayer.play();  // Phát nhạc tự động
//    } catch (error) {
//        console.error('Error playing song:', error);
//    }
//}
//
//// Hàm quay lại danh sách bài hát
//function goBack() {
//    location.reload();  // Tải lại trang
//}
//
//// Hàm thêm bài hát vào playlist
//function addToPlaylist(songId) {
//    // Gửi yêu cầu tới server để thêm bài hát vào playlist
//    // Giả sử bạn có API để xử lý việc thêm bài hát vào playlist
//
//    fetch('/add-to-playlist', {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({ songId: songId }),
//    })
//    .then(response => response.json())
//    .then(data => {
//        if (data.success) {
//            alert('Song added to playlist!');
//        } else {
//            alert('Failed to add song to playlist.');
//        }
//    })
//    .catch(error => {
//        console.error('Error adding song to playlist:', error);
//    });
//}

