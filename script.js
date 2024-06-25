document.addEventListener('DOMContentLoaded', () => {
    const addTodoButton = document.getElementById('add-todo');
    const newTodoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    // Function to add a new to-do item
    function addTodo() {
        const todoText = newTodoInput.value.trim();
        if (todoText === '') {
            alert('Please enter a to-do item');
            return;
        }

        // Create a new list item (li)
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = todoText;

        // Add an event listener to remove the item when clicked
        li.addEventListener('click', () => {
            li.remove();
        });

        // Append the new list item to the to-do list (ul)
        todoList.appendChild(li);

        // Clear the input box after adding the item
        newTodoInput.value = '';
    }

    // Add event listener to the "Add" button
    addTodoButton.addEventListener('click', addTodo);
});




