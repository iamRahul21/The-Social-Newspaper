$(document).ready(function () {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(postsUrl)
        .then(response => response.json())
        .then(posts => {
            fetch(usersUrl)
                .then(response => response.json())
                .then(users => {
                    renderPostsCarousel(posts, users);
                });
        })
        .catch(error => console.error('Error fetching posts:', error));
});

function renderPostsCarousel(posts, users) {
    const recentPostsCarousel = $('#recent-posts');

    posts.forEach(post => {
        const user = users.find(user => user.id === post.userId);
        const postCard = `
            <div class="item">
                <h2>${post.title}</h3>
                <h4>${post.body}</h4>
                <p>by: ${user.name}</p>
            </div>
        `;
        recentPostsCarousel.append(postCard);
    });

    recentPostsCarousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
}