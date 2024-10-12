// Select the necessary elements
const addButton = document.getElementById('add-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const dateDisplay = document.getElementById('date-display');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}

// Function to display the current date in DD/MM/YYYY format
function displayDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();

    const currentDate = `${day}/${month}/${year}`;
    dateDisplay.textContent = currentDate;
}

// Add event listener to the Add button
addButton.addEventListener('click', addTask);

// Optional: Allow adding task by pressing 'Enter' key
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Display the current date on page load
displayDate();
