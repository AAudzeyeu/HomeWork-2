const createTasksForm = function () {

    const createDomTasksForm = function () {

        const createDivMainTasks = function () {
            const div = document.createElement('div')
            div.classList.add('main-tasks')
            document.body.append(div);
        }

        const createDivContainerTasks = function () {
            const divMainTasks = document.querySelector('.main-tasks');
            const div = document.createElement('div');

            div.classList.add('container-tasks');
            divMainTasks.append(div);
        }

        const createDivTasksTextHeader = function () {
            const divContainerTasks = document.querySelector('.container-tasks');
            const div = document.createElement('div');
            const h3 = document.createElement('h3');

            h3.id = 'tasks-text';
            h3.textContent = 'Tasks';
            divContainerTasks.append(div);
            div.append(h3);
        }

        const createTasksList = function () {
            const divContainerTasks = document.querySelector('.container-tasks');
            const div = document.createElement('div');

            div.classList.add('tasks');
            divContainerTasks.append(div);
        }

        const createTasksCompletedHeader = function () {
            const divContainerTasks = document.querySelector('.container-tasks');
            const div = document.createElement('div');
            const h3 = document.createElement('h3');

            divContainerTasks.append(div);

            h3.id = 'completed-tasks__text';
            h3.textContent = 'Completed';
            div.append(h3);
        }

        const createTasksListCompleted = function () {
            const divContainerTasks = document.querySelector('.container-tasks');
            const div = document.createElement('div');

            div.classList.add('tasks-completed');
            divContainerTasks.append(div);
        }

        const createDivAddTasksToForm = function () {
            const divMainTasks = document.querySelector('.main-tasks');
            const div = document.createElement('div');
            const form = document.createElement('form');
            const button = document.createElement('button');

            div.classList.add('tasks-add');
            divMainTasks.append(div);

            form.id = 'form-button__task';
            div.append(form);

            button.id = 'button-add__randomTask';
            button.textContent = 'Add Random Task';
            div.append(button)

        }

        const createFormAddTasksToForm = function () {
            const formTasksAddToForm = document.querySelector('#form-button__task');
            const input = document.createElement('input');
            const label = document.createElement('label');
            const button = document.createElement('button');

            input.setAttribute('required', true);
            input.type = 'text';
            input.id = 'add-task';
            input.name = 'add-task';
            formTasksAddToForm.append(input);

            label.setAttribute('for', 'add-task');
            input.after(label);

            button.id = 'button-add__task';
            button.textContent = 'Add Task';
            label.after(button)

        }

        createDivMainTasks();
        createDivContainerTasks();
        createDivTasksTextHeader();
        createTasksList();
        createTasksCompletedHeader();
        createTasksListCompleted();
        createDivAddTasksToForm();
        createFormAddTasksToForm();
    }
    createDomTasksForm();

    const buttonAddNewTask = document.querySelector('#button-add__task');
    const buttonAddRandomTask = document.querySelector('#button-add__randomTask')
    const inputTask = document.querySelector('#add-task');
    const tasks = document.querySelector('.container-tasks')
    const headerTasksMenu = document.querySelector('.tasks');
    const tasksCompleted = document.querySelector('.tasks-completed');

    const sendData = async (url, data) => {
        console.log(data);
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });

        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки${response}`)
        }
    };

    const removeData = async (url, elJson) => {
        const response = await fetch(url, {
            method: 'DELETE',
            body: elJson,
        });

        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки${response}`)
        };
    };

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
                inProgress.forEach(function (el, i) {

                    const div = document.createElement('div');
                    div.style.position = 'relative';

                    const divClose = document.createElement('div');
                    divClose.classList.add('header-burger');

                    const inputAddNewTask = document.createElement('input');
                    const labelAddNewTask = document.createElement('label');

                    inputAddNewTask.type = 'checkbox';
                    inputAddNewTask.name = 'new-task'
                    inputAddNewTask.classList.add('task-form__checkbox');

                    labelAddNewTask.setAttribute('for', inputAddNewTask.name);
                    labelAddNewTask.textContent = inProgress[i]['title'];
                    labelAddNewTask.classList.add('task-form__text');


                    div.id = el.id;
                    div.classList.add('back-div__style')

                    div.append(inputAddNewTask);
                    div.append(divClose);
                    inputAddNewTask.after(labelAddNewTask)
                    headerTasksMenu.append(div);
                })

                completed.forEach(function (el, i) {
                    const div = document.createElement('div');
                    div.style.position = 'relative'

                    const divClose = document.createElement('div');
                    divClose.classList.add('header-burger');

                    const inputAddNewTask = document.createElement('input');
                    const labelAddNewTask = document.createElement('label');

                    inputAddNewTask.type = 'checkbox';
                    inputAddNewTask.name = 'new-task'
                    inputAddNewTask.checked = 'checked';
                    inputAddNewTask.classList.add('task-form__checkbox');

                    labelAddNewTask.setAttribute('for', inputAddNewTask.name);
                    labelAddNewTask.textContent = completed[i]['title'];
                    labelAddNewTask.classList.add('task-form__text');


                    div.id = el.id;
                    div.classList.add('back-div__style')
                    div.append(inputAddNewTask);
                    div.append(divClose);
                    inputAddNewTask.after(labelAddNewTask)
                    tasksCompleted.append(div)
                });

            });

            buttonAddNewTask.addEventListener('click', function (e) {

                if (inputTask.value.length >= 1) {
                    e.preventDefault();
                    const div = document.createElement('div')
                    div.style.position = 'relative'

                    const divClose = document.createElement('div');
                    divClose.classList.add('header-burger');

                    const inputAddNewTask = document.createElement('input');
                    const labelAddNewTask = document.createElement('label');

                    inputAddNewTask.type = 'checkbox';
                    inputAddNewTask.name = 'new-task';
                    inputAddNewTask.id = 'new-task';
                    inputAddNewTask.classList.add('task-form__checkbox');

                    labelAddNewTask.setAttribute('for', inputAddNewTask.name);
                    labelAddNewTask.textContent = inputTask.value;
                    labelAddNewTask.classList.add('task-form__text');

                    div.append(inputAddNewTask);
                    div.append(divClose);
                    inputAddNewTask.after(labelAddNewTask);
                    headerTasksMenu.append(div);

                }
            })

            tasks.addEventListener('change', function (e) {
                const parent = e.target.parentNode;

                if (e.target.checked) {
                    inProgress.forEach(function (el) {
                        if (el['id'] == parent['id']) {
                            el['completed'] = true;
                            const elJson = JSON.stringify(el);
                            // console.log(elJson);
                            sendData('https://jsonplaceholder.typicode.com/todos/', elJson);
                        }
                    })
                    tasksCompleted.append(parent);
                }
                if (!(e.target.checked)) {
                    completed.forEach(function (el) {
                        if (el['id'] == parent['id']) {
                            el['completed'] = false;
                            const elJson = JSON.stringify(el);
                            sendData('https://jsonplaceholder.typicode.com/todos/', elJson);
                        }
                    })
                    // console.log(completed[parent['id']]);
                    headerTasksMenu.append(parent);
                }
            })

            tasks.addEventListener('click', function (e) {
                if (e.target.classList == 'header-burger') {
                    e.target.parentNode.remove();
                    inProgress.forEach(function (el) {
                        if (el['id'] == parent['id']) {
                            const elJson = JSON.stringify(el);
                            // console.log(el);
                            removeData('https://jsonplaceholder.typicode.com/todos/', elJson);
                        }
                    })
                    completed.forEach(function (el) {
                        if (el['id'] == parent['id']) {
                            const elJson = JSON.stringify(el);
                            // console.log(el);
                            removeData('https://jsonplaceholder.typicode.com/todos/', elJson);
                        }
                    })
                }
            });

        })


}

createTasksForm();


//Сгенерировать кастомное событие о том что таска была изменена
//Работать с перебором массивов
// Сделать через темплейт