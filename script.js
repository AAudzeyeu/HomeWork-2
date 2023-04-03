

// // // const elem = document.querySelectorAll('.biig');

// // // document.documentElement.addEventListener('click', (e) => {
// // //     const biig = e.target.closest('.biig') 
// // //     const color = 'red';

// // //     biig.style.background = color;
// // //     let scrollButtom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// // //     console.log(`TOP ${elem.scrollTop}`);
// // //     console.log(`BOTTOM ${scrollButtom}`);


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



// console.log(data);
// const test = {
//     type: true,
//     isAdmin: true,
//     name: 'Lexa',
//     age: '15',
// }
// console.log(test['isAdmin']);
// console.log(data[0]['type']);

// for (key in test) {
//     console.log(test[`${key}`]);
// }


// let createFormtest = function () {
//     let input = document.createElement('input');
//     input.type = `input`
//     input.value = ''
//     input.placeholder = 'Введи привет'
//     let br = document.createElement('br')
//     form.append(input);
//     form.append(br)
// }
// createFormtest();

let container = document.querySelector('#container')
let form = document.createElement('form')
let result = [];
form.id = 'form'
let createForm = function () {
    container.append(form)
    for (let i = 0; i < data.length; i++) {
        let br = document.createElement('br');
        if ((data[i]['type']) === 'input') {
            let input = document.createElement('input');
            let label = document.createElement('label');
            input.type = data[i][`type`]
            input.id = data[i]['id']
            input.value = data[i]['value']
            label.textContent = data[i]['placeholder']
            form.append(input);
            form.append(label);
            form.append(br)
        }
        if ((data[i]['type']) === 'date') {
            let input = document.createElement('input');
            let label = document.createElement('label');
            input.type = data[i][`type`]
            input.id = data[i]['id']
            input.value = data[i]['value']
            label.textContent = data[i]['placeholder']
            form.append(input);
            form.append(label);
            form.append(br)
        }
        // console.log(data[i]['type']);
        if ((data[i]['type']) === 'radio') {
            // console.log(data[i]['options'].length);


            let input = document.createElement('input');
            let label = document.createElement('label');
            input.type = 'radio'
            input.value = data[i]['value']


            for (let j = 0; j < data[i]['options'].length; j++) {
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.name = data[i]['id']
                label.id = data[i]['options'][j]
                input.type = data[i]['type']

                label.textContent = data[i]['options'][j]
                form.append(input);
                form.append(label);
            }


            form.append(br)
        }
        if ((data[i]['type']) === 'checkbox') {

            let input = document.createElement('input');
            let label = document.createElement('label');
            input.type = data[i][`type`]
            input.id = data[i]['id']
            input.value = data[i]['value']
            label.textContent = data[i]['placeholder']
            for (let j = 0; j < data[i]['options'].length; j++) {
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.type = data[i][`type`]
                input.id = data[i]['id']
                input.value = data[i]['value']
                label.textContent = data[i]['options'][j]
                form.append(input);
                form.append(label);
            }
        }

        form.append(br)
    }
}
createForm();

let createButton = function (event) {
    let button = document.createElement('button');
    button.id = 'button'
    button.formMethod = 'get'
    button.textContent = 'Submit'
    // button.onsubmit = console.log('hi22');

    form.append(button);

}
createButton();

let loadedForm = function (event) {
    event.preventDefault();
    let el = document.querySelector('#form');
    let nameForm = {};
    let surnameForm = {};
    let birthForm = {};
    let sexForm = {};
    let timeForm = {};

    for (let i = 0; i < data.length; i++) {
        if ((data[i]['id']) === 'name') {
            nameForm['id'] = data[i]['id']
            nameForm['value'] = el.name.value;
        }
        if ((data[i]['id']) === 'surname') {
            surnameForm['id'] = data[i]['id']
            surnameForm['value'] = el.surname.value;
        }
        if ((data[i]['id']) === 'birthday') {
            birthForm['id'] = data[i]['id']
            birthForm['value'] = el.birthday.value;
        }
        if ((data[i]['id']) === 'sex') {
            sexForm['id'] = data[i]['id']
            let radioInp = document.getElementsByName('sex');
            for (let j = 0; j < radioInp.length; j++) {
                if (radioInp[j].type == "radio" && radioInp[j].checked) {
                    sexForm['value'] = data[i]['options'][j]
                }
            }
        }
        if ((data[i]['id']) === 'time') {
            timeForm['id'] = data[i]['id']
            let checkInp = document.querySelectorAll('#time');
            let timeResultForm = '';
            for (let k = 0; k < checkInp.length; k++) {
                if (checkInp[k].type == "checkbox" && checkInp[k].checked) {
                    timeResultForm = timeResultForm.concat(`${data[i]['options'][k]}, `);
                    timeForm['value'] = timeResultForm
                }
            }
        }

    };

    // surNameForm['id'] = data[1]['id']
    // surNameForm['value'] = el.surname.value;
    // birthForm['id'] = data[2]
    result.push(nameForm, surnameForm, birthForm, sexForm, timeForm)
    console.log(result);
    result = [];
}
document.querySelector('#button').addEventListener('click', loadedForm);
let el = document.querySelector('#form');

// console.log(data[0]['id']);








// document.querySelector('#button').addEventListener('click', () => {
//     let arr = [];
//     let data = document.querySelector('#name').value;
//     arr = arr.push(data);
//     document.querySelector('.out').innerHTML = data;
//     console.log(arr);
// })


let obj = {};
let str = '';
let ss = data[4]['options'][2];
let result4 = ss.concat(`, ${ss}`)
console.log();
obj['value'] = result4
console.log(obj);

















