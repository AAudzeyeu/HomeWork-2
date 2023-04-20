const createTasksForm = function () {


    const createDomTasksForm = function () {

        const createDivMainTasks = function () {
            const div = document.createElement('div')
            div.classList.add('main-tasks')
            document.body.append(div);
        }

        const createDivContainerTasks = function () {
            const DivMainTasks = document.querySelector('.main-tasks');
            const div = document.createElement('div');

            div.classList.add('container-tasks');
            DivMainTasks.append(div);
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
        
        const createTasksList = function() {
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

        const createTasksListCompleted = function() {
            const divContainerTasks = document.querySelector('.container-tasks');
            const div = document.createElement('div');

            div.classList.add('tasks-completed');
            divContainerTasks.append(div);
        }

        const createDivAddTasksToForm = function () {
            const DivMainTasks = document.querySelector('.main-tasks');
            const div = document.createElement('div');
            const form = document.createElement('form');
            const button = document.createElement('button');

            div.classList.add('tasks-add');
            DivMainTasks.append(div);

            form.id = 'form-button__task';
            div.append(form);

            button.id = 'button-add__randomTask';
            button.textContent = 'Add Ranom Task';
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
            completed.forEach(function (el, i) {

                const div = document.createElement('div');
                div.style.position = 'relative';

                const divClose = document.createElement('div');
                divClose.classList.add('header-burger');

                const inputAddNewTask = document.createElement('input');
                const labelAddNewTask = document.createElement('label');

                inputAddNewTask.type = 'checkbox';
                inputAddNewTask.name = 'new-task'
                inputAddNewTask.classList.add('task-form__text');

                labelAddNewTask.setAttribute('for', inputAddNewTask.name);
                labelAddNewTask.textContent = inProgress[i]['title'];
                labelAddNewTask.classList.add('task-form__text');


                div.append(inputAddNewTask);
                div.append(divClose);
                inputAddNewTask.after(labelAddNewTask)
                headerTasksMenu.append(div)
            })

            inProgress.forEach(function (el, i) {
                const div = document.createElement('div');
                div.style.position = 'relative'

                const divClose = document.createElement('div');
                divClose.classList.add('header-burger');

                const inputAddNewTask = document.createElement('input');
                const labelAddNewTask = document.createElement('label');

                inputAddNewTask.type = 'checkbox';
                inputAddNewTask.name = 'new-task'
                inputAddNewTask.checked = 'checked';
                inputAddNewTask.classList.add('task-form__text');

                labelAddNewTask.setAttribute('for', inputAddNewTask.name);
                labelAddNewTask.textContent = inProgress[i]['title'];
                labelAddNewTask.classList.add('task-form__text');


                div.append(inputAddNewTask);
                div.append(divClose);
                inputAddNewTask.after(labelAddNewTask)
                tasksCompleted.append(div)
            })
        })

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
                inputAddNewTask.classList.add('task-form__text');

                labelAddNewTask.setAttribute('for', inputAddNewTask.name);
                labelAddNewTask.textContent = inputTask.value;
                labelAddNewTask.classList.add('task-form__text');

                completed.push(inputTask.value)
                console.log(completed);


                div.append(inputAddNewTask);
                div.append(divClose)
                inputAddNewTask.after(labelAddNewTask)
                headerTasksMenu.append(div)

                console.log();
            }
        })


    })

tasks.addEventListener('change', function (e) {

    const inputNextSibling = e.target.nextSibling
    const parent = inputNextSibling.parentNode;

    if (e.target.checked) {
        tasksCompleted.append(parent)

    }
    if (!(e.target.checked)) {
        headerTasksMenu.append(parent)

    }
})

tasks.addEventListener('click', function (e) {
    if (e.target.classList == 'header-burger') {
        e.target.parentNode.remove();
    }
})

}

createTasksForm();