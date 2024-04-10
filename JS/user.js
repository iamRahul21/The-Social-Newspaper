fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const userDiv = document.getElementById('user-container');

    users.forEach(user => {
        const userContainer = document.createElement('div');
        userContainer.classList.add('user-container');

        const profileImg = document.createElement('img');
        profileImg.src = '../../assets/img/user.png';
        profileImg.alt = 'Profile Icon';
        profileImg.classList.add('profile-icon');

        userContainer.appendChild(profileImg);

        const userNameDiv = document.createElement('div');
        userNameDiv.textContent = user.name;
        userNameDiv.classList.add('user-name');

        userContainer.appendChild(userNameDiv);

        userDiv.appendChild(userContainer);
    });
})
.catch(error => {
    console.error('Error fetching user data:', error);
});