

// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the "Add" button element by its ID and typecast it to HTMLButtonElement
    const addTodoButton = document.getElementById('add-todo') as HTMLButtonElement;
    // Get the input element for new to-dos by its ID and typecast it to HTMLInputElement
    const newTodoInput = document.getElementById('new-todo') as HTMLInputElement;
    // Get the unordered list element where to-dos will be displayed by its ID and typecast it to HTMLUListElement
    const todoList = document.getElementById('todo-list') as HTMLUListElement;

    // Function to add a new to-do item to the list
    function addTodo(): void {
        // Get the trimmed value of the input field
        const todoText: string = newTodoInput.value.trim();
        // Check if the input is empty
        if (todoText === '') {
            // Alert the user if no to-do item is entered
            alert('Please enter a to-do item');
            // Exit the function if the input is empty
            return;
        }

        // Create a new list item (li) element
        const li: HTMLLIElement = document.createElement('li');
        // Assign the Bootstrap class to style the list item
        li.className = 'list-group-item';
        // Set the text content of the list item to the entered to-do text
        li.textContent = todoText;

        // Add an event listener to the list item that will remove it from the list when clicked
        li.addEventListener('click', () => {
            // Remove the list item from the parent (ul) element
            li.remove();
        });

        // Append the new list item to the to-do list (ul)
        todoList.appendChild(li);

        // Clear the input box after adding the item to the list
        newTodoInput.value = '';
    }

    // Add an event listener to the "Add" button that calls the addTodo function when clicked
    addTodoButton.addEventListener('click', addTodo);
});






