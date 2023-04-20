const createTasksForm = function () {
    const buttonAddNewTask = document.querySelector('#button-add__task');
    const buttonAddRandomTask = document.querySelector('#button-add__randomTask')
    const inputTask = document.querySelector('#add-task');
    const tasks = document.querySelector('.container-tasks')
    const headerTasksMenu = document.querySelector('.tasks');
    const tasksCompleted = document.querySelector('.tasks-completed')

    inputTask.setAttribute('required', true);


    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {
            let { completed, inProgress } = json.reduce((prev, cur) => {
                if (cur.completed) {
                    prev.completed.push(cur)
                } else {
                    prev.inProgress.push(cur)
                } return prev;
            },
                {
                    completed: [],
                    inProgress: []
                })

            buttonAddRandomTask.addEventListener('click', function (e) {
                e.preventDefault();
                completed.forEach(function(el, i) {
                    
                    const div = document.createElement('div');
                    console.log();
                    const inputAddNewTask = document.createElement('input');
                    const labelAddNewTask = document.createElement('label');
        
                    inputAddNewTask.type = 'checkbox';
                    inputAddNewTask.name = 'new-task'
                    inputAddNewTask.classList.add('task-form__text');

                    labelAddNewTask.setAttribute('for', inputAddNewTask.name);
                    labelAddNewTask.textContent = inProgress[i]['title'] + '&#10006;' ;
                    labelAddNewTask.classList.add('task-form__text');
        
                    console.log();
                    div.append(inputAddNewTask);
                    inputAddNewTask.after(labelAddNewTask)
                    headerTasksMenu.append(div)
                })
                
                inProgress.forEach(function(el, i) {
                    const div = document.createElement('div');
                    console.log();
                    const inputAddNewTask = document.createElement('input');
                    const labelAddNewTask = document.createElement('label');
        
                    inputAddNewTask.type = 'checkbox';
                    inputAddNewTask.name = 'new-task'
                    inputAddNewTask.checked = 'checked';
                    inputAddNewTask.classList.add('task-form__text');

                    labelAddNewTask.setAttribute('for', inputAddNewTask.name);
                    labelAddNewTask.textContent = inProgress[i]['title'];
                    labelAddNewTask.classList.add('task-form__text');
        
                    console.log();
                    div.append(inputAddNewTask);
                    inputAddNewTask.after(labelAddNewTask)
                    tasksCompleted.append(div)
                })
            })

            buttonAddNewTask.addEventListener('click', function (e) {
        
                if (inputTask.value.length >= 1) {
                    e.preventDefault();
                    const div = document.createElement('div')
                    console.log();
                    
                    const inputAddNewTask = document.createElement('input');
                    const labelAddNewTask = document.createElement('label');
        
                    inputAddNewTask.type = 'checkbox';
                    inputAddNewTask.name = 'new-task';
                    inputAddNewTask.id = 'new-task';
                    inputAddNewTask.classList.add('task-form__text');

                    labelAddNewTask.setAttribute('for', inputAddNewTask.name);
                    labelAddNewTask.textContent = inputTask.value;
                    labelAddNewTask.classList.add('task-form__text');

                    completed.push(inputTask.value)
                    console.log(completed);
        
                    console.log();
                    div.append(inputAddNewTask);
                    inputAddNewTask.after(labelAddNewTask)
                    headerTasksMenu.append(div)
        
                    console.log();
                }
            })
        })




    tasks.addEventListener('change', function (e) {
        
        const inputNextSibling = e.target.nextSibling
        const parent = inputNextSibling.parentNode;
        console.log(parent);
        if (e.target.checked) {
            tasksCompleted.append(parent)
            
        }
        if (!(e.target.checked)) {
            headerTasksMenu.append(parent)
            
        }
    })
}

createTasksForm();