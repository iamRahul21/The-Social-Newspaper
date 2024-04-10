$(document).ready(function () {
    const photosUrl = 'https://jsonplaceholder.typicode.com/photos';
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(photosUrl)
        .then(response => response.json())
        .then(photos => {
            fetch(usersUrl)
                .then(response => response.json())
                .then(users => {
                    renderPhotosCarousel(photos, users);
                });
        })
        .catch(error => console.error('Error fetching photos:', error));
});

function renderPhotosCarousel(photos, users) {
    const recentPhotosCarousel = $('#recent-photos');

    photos.forEach(photo => {
        const user = users.find(user => user.id === photo.albumId);
        const photoCard = `
            <div class="item">
                <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                <p>by: ${user.name}</p>
            </div>
        `;
        recentPhotosCarousel.append(photoCard);
    });

    recentPhotosCarousel.owlCarousel({
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
