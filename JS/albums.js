function fetchAndDisplayAlbums() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/albums',
        method: 'GET',
        success: function (response) {
            const recentAlbumDiv = document.getElementById('recent-posts');
            recentAlbumDiv.innerHTML = '';

            response.forEach(function (album) {
                const albumElement = document.createElement('div');
                albumElement.classList.add('items');
                albumElement.innerHTML = `
                        <h1>Title: ${album.title}</h1>
                        <h4>User ID: ${album.userId}</h4>
                    `;
                recentAlbumDiv.appendChild(albumElement);
            });

            document.getElementById('recent-photos').style.display = 'none';
            recentAlbumsDiv.style.display = 'block';
        },
        error: function (error) {
            console.error('Error fetching albums:', error);
        }
    });
}

document.getElementById('album').addEventListener('click', function (event) {
    event.preventDefault();

    fetchAndDisplayAlbums();
});