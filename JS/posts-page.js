function fetchAndDisplayPosts() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: function (response) {
            const recentPostsDiv = document.getElementById('recent-posts');
            recentPostsDiv.innerHTML = '';

            response.forEach(function (posts) {
                const postsElement = document.createElement('div');
                postsElement.classList.add('itemss');
                postsElement.innerHTML = `
                        <h1>Title: ${posts.title}</h1>
                        <h2>${posts.body}</h3>
                        <h4>User ID: ${posts.userId}</h4>
                    `;
                recentPostsDiv.appendChild(postsElement);
            });

            document.getElementById('recent-photos').style.display = 'none';
            recentPostsDiv.style.display = 'block';
        },
        error: function (error) {
            console.error('Error fetching posts:', error);
        }
    });
}

document.getElementById('posts').addEventListener('click', function (event) {
    event.preventDefault();

    fetchAndDisplayPosts();
});