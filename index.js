document.getElementById('addTaskButton').addEventListener('click', function () {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    let newTask = document.createElement('li');

    let newTaskText = document.createElement('span');

    let check = document.createElement('input');
    check.type = 'checkbox'
    check.classList.add('checkbox')
    if(taskInput.value !== ''){
        newTaskText.innerText = taskInput.value;
    taskList.appendChild(newTask);

    }

    check.addEventListener('click', function () {
        newTaskText.classList.toggle('completed');
    });

    let deleteButton = document.createElement('img');
    deleteButton.classList.add('canecasvg')
    deleteButton.src = './svg/caneca.svg'
    deleteButton.width = 20
    deleteButton.height = 20
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(check);
    newTask.appendChild(newTaskText);
    newTask.appendChild(deleteButton);
    taskInput.value = '';
});
