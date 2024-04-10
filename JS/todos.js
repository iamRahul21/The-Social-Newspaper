function fetchAndDisplayTodos() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        method: 'GET',
        success: function (response) {
            const recentTodosDiv = document.getElementById('recent-posts');
            recentTodosDiv.innerHTML = '';

            response.forEach(function (todos) {
                const todosElement = document.createElement('div');
                todosElement.classList.add('itemsss');
                todosElement.innerHTML = `
                        <h1>Title: ${todos.title}</h1>
                        <h3>Status: ${todos.completed}</h3>
                        <h4>User ID: ${todos.userId}</h4>
                    `;
                recentTodosDiv.appendChild(todosElement);
            });

            document.getElementById('recent-photos').style.display = 'none';
            recentTodosDiv.style.display = 'block';
        },
        error: function (error) {
            console.error('Error fetching todos:', error);
        }
    });
}

document.getElementById('todos').addEventListener('click', function (event) {
    event.preventDefault();

    fetchAndDisplayTodos();
});