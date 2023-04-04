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

const root = document.querySelector('#parent');
const body = document.body;
const customClick = new Event('click');


root.addEventListener('click', () => {
    alert('Hi')
})

body.addEventListener('click', (e) => {
    root.dispatchEvent(customClick)
});
