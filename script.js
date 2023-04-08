

// // const elem = document.querySelectorAll('.biig');

// // document.documentElement.addEventListener('click', (e) => {
// //     const biig = e.target.closest('.biig') 
// //     const color = 'red';

// //     biig.style.background = color;
// //     let scrollButtom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// //     console.log(`TOP ${elem.scrollTop}`);
// //     console.log(`BOTTOM ${scrollButtom}`);


// // // });


// // let div = document.createElement('div');

// // div.style.overflowY = 'scroll';
// // div.style.width = '50px';
// // div.style.height = '50px';

// // // мы должны вставить элемент в документ, иначе размеры будут равны 0
// // document.body.append(div);
// // let scrollWidth = div.offsetWidth - div.clientWidth;

// // div.remove();

// // console.log(scrollWidth);


// // const ball = document.querySelector('#ball')
// // const field = document.querySelector('#field')
// // console.log(`Поле полная ширина mar + bord + pad + val - ${field.offsetWidth}`);
// // console.log(`Поле ширина клиента padd + val - ${field.clientWidth}`);
// // console.log(`Мяч полная ширина - ${ball.offsetWidth}`);
// // console.log(`Мяч ширина клиента - ${ball.clientWidth}`);
// // console.log(ball.clientWidth / 2);
// // const ballTop = field.clientHeight / 2 - ball.offsetHeight / 2;
// // const ballLeft = field.clientWidth / 2 - ball.offsetHeight / 2;
// // console.log();
// // ball.style.top = ballTop + 'px';
// // ball.style.left = ballLeft + 'px'
// // // ball.style.left = 'calc(50% - 20px)'


// // // let elem1 = document.getElementById("ball");

// // // function createMessageUnder(elem1, html) {
// // //   // создаём элемент, который будет содержать сообщение
// // //   let message = document.createElement('div');
// // //   // для стилей лучше было бы использовать css-класс здесь
// // //   message.style.cssText = "position:absolute; color: red";

// // //   // устанавливаем координаты элементу, не забываем про "px"!
// // //   let coords = elem1.getBoundingClientRect();

// // //   message.style.left = coords.left + "px";
// // //   message.style.top = coords.bottom + "px";

// // //   message.innerHTML = html;

// // //   return message;
// // // }

// // // // Использование:
// // // // добавим сообщение на страницу на 5 секунд
// // // let message = createMessageUnder(elem, 'Hello, world!');
// // // document.body.append(message);
// // // setTimeout(() => message.remove(), 5000);

// // const fieldCord = field.getBoundingClientRect()
// // let fieldCordOutHeight = field.offsetHeight - field.clientHeight;
// // let fieldCordOurWidth = field.offsetWidth - field.clientWidth;

// // let answer3 = [fieldCord.left + field.clientLeft, fieldCord.top + field.clientTop];
// // let arr1 = [fieldCord.left, fieldCord.top];
// // let arr2 = [fieldCord.right, fieldCord.bottom];
// // let arr3 = [fieldCordOurWidth, fieldCordOutHeight];
// // console.log(arr1);
// // console.log(arr2);
// // console.log(arr3);
// // console.log(answer3);
// // console.log(field.clientLeft);

// // const button = document.querySelector('#button')

// // const removeText = function () {
// //     button.hidden = true;
// // }
// // button.addEventListener('click', removeText);


// const field = document.querySelector('#field');
// const ball = document.querySelector('#ball')

// let getPositionCursor = function (event) {
//     let fieldCoords = this.getBoundingClientRect();
//     let ballCoords = {
//         top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//         left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
//     };

//     // запрещаем пересекать верхнюю границу поля
//     if (ballCoords.top < 0) ballCoords.top = 0;

//     // запрещаем пересекать левую границу поля
//     if (ballCoords.left < 0) ballCoords.left = 0;


//     // // запрещаем пересекать правую границу поля
//     if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//         ballCoords.left = field.clientWidth - ball.clientWidth;
//     }

//     // запрещаем пересекать нижнюю границу поля
//     if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//         ballCoords.top = field.clientHeight - ball.clientHeight;
//     }

//     ball.style.left = ballCoords.left + 'px';
//     ball.style.top = ballCoords.top + 'px';
//     console.log(`ClientX ${event.clientX}`);
//     console.log(`ClientY ${event.clientY}`);
//     console.log(`clientWidth ${event.currentTarget.clientWidth}`);
//     console.log(`clientHeight ${event.currentTarget.clientHeight}`);


// }
// field.addEventListener('click', getPositionCursor)


// const removeButton = document.querySelectorAll('.remove-button');
// removeButton.addEventListener('click', removeText);

// const removeText = function() {
//     console.log(1);
// }

// form.onclick = function(event) {
//     if (event.target.className != 'remove-button') return;

//     let pane = event.target.closest('.pane');
//     pane.remove();
//   };

// const removeButton = document.querySelector('#form');
// const removeText = function(event) {
//     if(event.target.className != 'remove-button') return;

//     let pane = event.target.closest('.pane');
//     pane.remove();
// }
// removeButton.addEventListener('click', removeText)


const data = [
    {
        type: "input",
        id: "name",
        value: "",
        placeholder: "name",
    },
    {
        type: "input",
        id: "surname",
        value: "",
        placeholder: "surname",
    },
    {
        type: "date",
        id: "birthday",
        value: "",
        placeholder: "date of birth",
    },
    {
        type: "radio",
        id: "sex",
        value: "man",
        options: ["man", "woman"],
        placeholder: "sex",
    },
    {
        type: "checkbox",
        id: "time",
        value: "",
        options: ["9-10 AM", "11-12 AM", "1-2 PM", "3-4 PM", "5-6 PM"],
        placeholder: "select timeslot for assessment",
    },
];

let createForm = function () {
    let container = document.querySelector('#container');
    let form = document.createElement('form');
    form.id = 'form';
    container.append(form);
};

let addForm = function () {


    data.forEach(function (element) {

        let br = document.createElement('br');

        if ((element['type']) === 'input') {
            let input = document.createElement('input');
            let label = document.createElement('label');

            input.type = element[`type`];
            input.id = element['id'];
            input.value = element['value'];

            label.textContent = element['placeholder'];
            label.setAttribute('for', `${element['id']}`);

            form.append(input);
            form.append(label);
            form.append(br);

        } else if ((element['type']) === 'date') {

            let input = document.createElement('input');
            let label = document.createElement('label');

            input.type = element[`type`];
            input.id = element['id'];
            input.value = element['value'];

            label.textContent = element['placeholder'];
            label.setAttribute('for', `${element['id']}`);

            form.append(input);
            form.append(label);
            form.append(br);

        } else if ((element['type']) === 'radio') {

            let input = document.createElement('input');

            input.type = 'radio'
            input.value = element['value']

            element['options'].forEach(function (item, index) {

                let input = document.createElement('input');
                let label = document.createElement('label');

                input.name = element['id'];
                input.type = element['type'];

                label.id = element['options'][index];
                label.textContent = element['options'][index];

                form.append(input);
                form.append(label);
            })

            form.append(br);

        } else if ((element['type']) === 'checkbox') {

            let input = document.createElement('input');
            let label = document.createElement('label');

            input.type = element[`type`];
            input.id = element['id'];
            input.value = element['value'];

            label.setAttribute('for', `${element['id']}`);
            label.textContent = element['placeholder'];

            element['options'].forEach(function (item, index) {

                let input = document.createElement('input');
                let label = document.createElement('label');

                input.type = element[`type`];
                input.id = element['id'];
                input.value = element['value'];

                label.textContent = element['options'][index];

                form.append(input);
                form.append(label);
            });
        }

        form.append(br)

    });
};

let createButton = function () {
    let button = document.createElement('button');

    button.id = 'button';
    button.formMethod = 'get';
    button.textContent = 'Submit';

    form.append(button);

};

let loadedForm = function (event) {

    event.preventDefault();

    let finishForm = [];


    let el = document.querySelector('#form');
    let nameForm = {};
    let surnameForm = {};
    let birthForm = {};
    let sexForm = {};
    let timeForm = {};

    data.forEach(function (element) {

        if ((element['id']) === 'name') {

            nameForm['id'] = element['id'];
            nameForm['value'] = el.name.value;

            finishForm.push(nameForm);

        } else if ((element['id']) === 'surname') {

            surnameForm['id'] = element['id'];
            surnameForm['value'] = el.surname.value;

            finishForm.push(surnameForm);

        } else if ((element['id']) === 'birthday') {

            birthForm['id'] = element['id'];
            birthForm['value'] = el.birthday.value;

            finishForm.push(birthForm);

        } else if ((element['id']) === 'sex') {

            sexForm['id'] = element['id'];

            let radioInp = document.getElementsByName('sex');
            let radioInpArr = Array.from(radioInp);

            radioInpArr.forEach(function (item, index) {

                if (radioInp[index].type == "radio" && radioInp[index].checked) {

                    sexForm['value'] = element['options'][index]

                }
            });

            let unCheckedForm = 0;

            radioInpArr.forEach(function (item, index) {

                if (!(radioInp[index].checked)) {
                    unCheckedForm++;
                }

                if (unCheckedForm === radioInp.length) {
                    sexForm['value'] = '';
                }

            });

            finishForm.push(sexForm);

        } else if ((element['id']) === 'time') {

            timeForm['id'] = element['id'];

            let checkInp = document.querySelectorAll('#time');
            let checkInpArr = Array.from(checkInp);

            let timeResultForm = [];

            checkInpArr.forEach(function (item, index) {

                if (checkInp[index].type == "checkbox" && checkInp[index].checked) {

                    timeResultForm.push(element['options'][index]);
                    timeForm['value'] = timeResultForm;

                }
            });

            let unCheckedForm = 0;

            checkInpArr.forEach(function (item, index) {

                if (!(checkInp[index].checked)) {
                    unCheckedForm++;
                }

                if (unCheckedForm === checkInp.length) {
                    timeForm['value'] = '';
                }

            });

            finishForm.push(timeForm);

        }

    });

    console.log(finishForm);

};

let submitForm = () => document.querySelector('#button').addEventListener('click', loadedForm);

createForm();
addForm();
createButton();
submitForm();


















