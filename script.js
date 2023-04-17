const createTasksForm = function () {
    const buttonAddNewTask = document.querySelector('#button-add__task');
    const inputTask = document.querySelector('#add-task');
    const tasks = document.querySelector('.container-tasks')
    const tasksCompleted = document.querySelector('.tasks-completed')
    
    inputTask.setAttribute('required', true);



    buttonAddNewTask.addEventListener('click', function (e) {
        if (inputTask.value.length >= 1) {
        e.preventDefault();
        console.log();
        // const br = document.createElement('br');
        const inputAddNewTask = document.createElement('input');
        const labelAddNewTask = document.createElement('label');
        const headerTasksMenu = document.querySelector('.tasks');

        inputAddNewTask.type = 'checkbox';
        inputAddNewTask.name = 'new-task'
        labelAddNewTask.setAttribute('for', inputAddNewTask.name);
        labelAddNewTask.textContent = inputTask.value;

        console.log();
            headerTasksMenu.append(inputAddNewTask);
            inputAddNewTask.after(labelAddNewTask)
            // labelAddNewTask.after(br);

            console.log();
        }
    })

    tasks.addEventListener('change', function(e) {
        const headerTasksMenu = document.querySelector('.tasks');
        // const br = document.createElement('br');

        if (e.target.checked) {
            tasksCompleted.append(e.target, e.target.nextSibling)
        }
        if (!(e.target.checked)) {
            headerTasksMenu.append(e.target, e.target.nextSibling)
        }
    })
}
createTasksForm();