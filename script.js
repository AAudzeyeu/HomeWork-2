// const divElements = document.querySelectorAll('.test');

// // divElements.onclick = function () {
// //     console.log(this.dataset.property);
// // };

// // const secondDivElement = document.querySelectorAll('.test')[1];

// // secondDivElement.onclick = function () {
// //     console.log(this.dataset.property);
// // };

// // const thirdDivElement = document.querySelectorAll('.test')[2];

// // thirdDivElement.onclick = function () {
// //     console.log(this.dataset.property);
// // };

// // const forthDivElement = document.querySelectorAll('.test')[3];

// // forthDivElement.onclick = function () {
// //     console.log(this.dataset.property);
// // };

// const clickHandler = function () {
//     console.log(this.dataset.property);

//     this.removeEventListener('click', clickHandler)
// }

// // divElements.forEach(el => {
// //     el.addEventListener('click', function() {
// //         console.log(this.dataset.property);
// //     }, {
// //         once: true,
// //         // passive: true,
// //     })
// // });

// divElements.forEach(el => {
//     el.addEventListener('click', clickHandler)
// })

// const divElements = document.querySelectorAll('.test');


// const clickHandler = function (e) {
//     console.log(this);
//     console.log(e);

// }


// divElements.forEach(el => {
//     el.addEventListener('click', clickHandler)
// })


// const root = document.querySelector('#parent');
// root.addEventListener('click', (e) => {
//     if(e.target.dataset.property) {
//         console.log(e.target.dataset.property); // Элемент на который мы нажали
//     }   
//     // console.log(e.currentTarget); // Элемент на который поешено событие
// })

// const root = document.querySelector('#parent');
// const elements = document.querySelectorAll('*');

// root.addEventListener('click', (e) => {
//     const goalElement = e.target.closest('.test')
//     if(goalElement) {
//         console.log(goalElement.dataset.property);
//     }
// });

// root.addEventListener('click', (color) => {
//     e.target.closest('.test').classList.add('blue')
// }) 

// document.querySelectorAll('.test').onclick = function() {
//     document.querySelector('.test').classList.add('white');
//   }


// root.addEventListener('click', (e) => {
//     const goalElement = e.target.closest('.test')
//     if(goalElement) {
//         goalElement.style.background = "rgba(0, 0, 0, 0)"
//     }
//     this.removeEventListener('click', )
// })


// const clearStyles = () => root.querySelectorAll('body')
//     .forEach(element => {
//         element.style.background = '';
//     });



// document.documentElement.addEventListener('click', (e) => {
//     const goalElement = e.target.closest('.test');
//     const randomColor = "#" + Math.floor(Math.random() * 1247).toString(16);

//     if (goalElement) {
//         goalElement.style.background = randomColor;

//     } else {
//       clearStyles();
//     }

// })

// const input = document.querySelector('#text');
// const checkbox = document.querySelector('#checkbox')

// document.addEventListener('change', (e) => {
//     console.log(e.target.value);
// })

// document.body.addEventListener('click', (e) => {
//     console.log(e.target.tagName);
// })
// elements.forEach(element => {
//     element.addEventListener('click', (e) => {
//         console.log(`Погружение`, e.currentTarget);
//         e.stopPropagation();
//     }, true)
//     element.addEventListener('click', (e) => {
//         console.log(`Всплытие`, e.currentTarget);
//     })
// });

// const root = document.querySelector('#parent');
// const body = document.body;


// root.addEventListener('click', (e) => {
//     console.log(e)
// })
// const customClick = new MouseEvent('click', {
//     clientX: 100,
//     clientY: 200,
// });

// body.addEventListener('click', (e) => {
//     root.dispatchEvent(customClick)
// });

// body.addEventListener('click', (e) => {
//     console.log('e', e);
//     console.log('X', e.pageX);
//     console.log('Y', e.pageY);
//     console.log('BX', body.offsetWidth);
//     console.log('BY', body.offsetHeight);
//     let x = e.pageX;
//     let y = e.pageY;
//     let bY = e.target.offsetHeight
//     let bX = e.target.offsetWidth;
//     if (x < bX / 2 && y < bY / 2) {
//         console.log(1);
//     } else if (x >= bX / 2 && y < bY / 2) {
//         console.log(2);
//     } else if (x < bX / 2 && y >= bY / 2) {
//         console.log(3);
//     } else if (x >= bX / 2 && y >= bY / 2) {
//         console.log(4);
//     }
// });

// const id = setTimeout((arg) => {
//     console.log(1)
// }, 100)

// setTimeout(() => {
//     console.log(2);
// }, 1000)

// for(let i = 0; i < 15; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 + i* 1000)
// }

// clearInterval(id);

// const id = setInterval(() => {
//     console.log(1);
// }, 100)

// setTimeout(() => {
// clearInterval(id)
// }, 1000)

let count = 0;
let timeout = 200;

// const id2 = setInterval(() => {
//     if(count > 9) {
//         clearInterval(id2)
//     }
//     count++;
//     console.log('tick');
// }, 1000)

// setTimeout(confirm, 1000, 1)

// const id2 = setTimeout(() => {
//     for(let i = 0; i < 10; i++) {
//         console.log(1);
//     }
// }, 1000)

// const id3 = setTimeout(() => {
    
//     setInterval(() => {
//         console.log(1);
//     }, 100)
    
// }, 1000)

const id4 = setTimeout(function func() {
    if(count < 10) {

        // if (success) clearTimeout(id4)
        count++;

        console.log(count);

        timeout *= 2;
        setTimeout(func, 1000);
    }
    else clearTimeout(id4)
}, timeout)