//простой планировщик дел
const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');



tasksAdd.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(taskInput.value.trim())

    if (taskInput.value.length > 0 && taskInput.value.trim() !== '') {

        tasksList.insertAdjacentHTML('beforeEnd', `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`)

        taskInput.value = " ";

    }



});

tasksList.addEventListener('click', (event) => {

    event.target.closest('.task').remove();

});