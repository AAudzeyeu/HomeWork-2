

// // const elem = document.querySelectorAll('.biig');

// // document.documentElement.addEventListener('click', (e) => {
// //     const biig = e.target.closest('.biig') 
// //     const color = 'red';

// //     biig.style.background = color;
// //     let scrollButtom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// //     console.log(`TOP ${elem.scrollTop}`);
// //     console.log(`BOTTOM ${scrollButtom}`);


// // });


// let div = document.createElement('div');

// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';

// // мы должны вставить элемент в документ, иначе размеры будут равны 0
// document.body.append(div);
// let scrollWidth = div.offsetWidth - div.clientWidth;

// div.remove();

// console.log(scrollWidth);


// const ball = document.querySelector('#ball')
// const field = document.querySelector('#field')
// console.log(`Поле полная ширина mar + bord + pad + val - ${field.offsetWidth}`);
// console.log(`Поле ширина клиента padd + val - ${field.clientWidth}`);
// console.log(`Мяч полная ширина - ${ball.offsetWidth}`);
// console.log(`Мяч ширина клиента - ${ball.clientWidth}`);
// console.log(ball.clientWidth / 2);
// const ballTop = field.clientHeight / 2 - ball.offsetHeight / 2;
// const ballLeft = field.clientWidth / 2 - ball.offsetHeight / 2;
// console.log();
// ball.style.top = ballTop + 'px';
// ball.style.left = ballLeft + 'px'
// // ball.style.left = 'calc(50% - 20px)'


// // let elem1 = document.getElementById("ball");

// // function createMessageUnder(elem1, html) {
// //   // создаём элемент, который будет содержать сообщение
// //   let message = document.createElement('div');
// //   // для стилей лучше было бы использовать css-класс здесь
// //   message.style.cssText = "position:absolute; color: red";

// //   // устанавливаем координаты элементу, не забываем про "px"!
// //   let coords = elem1.getBoundingClientRect();

// //   message.style.left = coords.left + "px";
// //   message.style.top = coords.bottom + "px";

// //   message.innerHTML = html;

// //   return message;
// // }

// // // Использование:
// // // добавим сообщение на страницу на 5 секунд
// // let message = createMessageUnder(elem, 'Hello, world!');
// // document.body.append(message);
// // setTimeout(() => message.remove(), 5000);

// const fieldCord = field.getBoundingClientRect()
// let fieldCordOutHeight = field.offsetHeight - field.clientHeight;
// let fieldCordOurWidth = field.offsetWidth - field.clientWidth;

// let answer3 = [fieldCord.left + field.clientLeft, fieldCord.top + field.clientTop];
// let arr1 = [fieldCord.left, fieldCord.top];
// let arr2 = [fieldCord.right, fieldCord.bottom];
// let arr3 = [fieldCordOurWidth, fieldCordOutHeight];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(answer3);
// console.log(field.clientLeft);

// const button = document.querySelector('#button')

// const removeText = function () {
//     button.hidden = true;
// }
// button.addEventListener('click', removeText);


const field = document.querySelector('#field');
const ball = document.querySelector('#ball')

let getPositionCursor = function(event) {
    console.log(`ClientX ${event.clientX}`);
    console.log(`ClientY ${event.clientY}`);
    console.log(`clientWidth ${event.currentTarget.clientWidth}`);
    console.log(`clientHeight ${event.currentTarget.clientHeight}`);
    ball.style.left = event.clientX + 'px'
    ball.style.top = event.clientY + 'px'
}
field.addEventListener('click', getPositionCursor)