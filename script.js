// src/script.ts
document.addEventListener('DOMContentLoaded', function () {
    var addTodoButton = document.getElementById('add-todo');
    var newTodoInput = document.getElementById('new-todo');
    var todoList = document.getElementById('todo-list');
    // Function to add a new to-do item
    function addTodo() {
        var todoText = newTodoInput.value.trim();
        if (todoText === '') {
            alert('Please enter a to-do item');
            return;
        }
        // Create a new list item (li)
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = todoText;
        // Add an event listener to remove the item when clicked
        li.addEventListener('click', function () {
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
