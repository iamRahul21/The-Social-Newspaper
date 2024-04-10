function fetchAndDisplayAlbums() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/albums',
        method: 'GET',
        success: function (response) {
            const recentPostsDiv = document.getElementById('recent-posts');
            recentPostsDiv.innerHTML = '';

            response.forEach(function (album) {
                const albumElement = document.createElement('div');
                albumElement.classList.add('items');
                albumElement.innerHTML = `
                        <h3>Title: ${album.title}</h2>
                        <h4>User ID: ${album.userId}</h4>
                    `;
                recentPostsDiv.appendChild(albumElement);
            });

            document.getElementById('recent-photos').style.display = 'none';
            recentPostsDiv.style.display = 'block';
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