let form=document.getElementById('taskForm');
let task=document.getElementById('Task');
let tasks=JSON.parse(localStorage.getItem('tasks')) || [];

//Function to handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    tasks.push(task.value);
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTasks();
});


function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}


function displayTasks() {
    // to avoid duplication of tasks, we need to clear the task list before displaying the tasks
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';


    tasks.forEach((task)=>{
        const li = document.createElement('li');
        li.textContent = task;
        li.style.padding = '5px';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(tasks.indexOf(task)));


        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
    
}

displayTasks();