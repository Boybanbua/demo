function addToPlaylist() {
    const songName = "Tên bài hát";  // Thay đổi thành giá trị thực tế
    const songUrl = "Đường dẫn bài hát";  // Thay đổi thành giá trị thực tế
    const playlistId = 1;  // ID của playlist cố định là 1

    // Gửi yêu cầu POST tới server
    fetch('/playlist/add-to-playlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: songName,
            link: songUrl,
            playlistId: playlistId
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Lỗi khi thêm vào playlist");
        }
        return response.json();
    })
    .then(data => {
        alert("Bài hát đã được thêm vào playlist!");
    })
    .catch(error => {
        console.error("Lỗi khi thêm vào playlist:", error);
        alert("Có lỗi xảy ra khi thêm bài hát vào playlist.");
    });
}
