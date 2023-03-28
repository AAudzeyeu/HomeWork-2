//DOM 

// console.log(document.body);
// document.body.style.background = "#777";

// const body = document.body;
// body.style.background = 'DarkGreen';

// const testElement = document.querySelector('#test')
// const testElement2 = document.getElementById('test')
// testElement2.dataset.property = '12';
// console.log(testElement.dataset.property);
// console.log(testElement2.dataset.property);

// const  testElement = document.querySelectorAll('.main-text')
// const  testElement = document.getElementsByClassName('.main-text')

// console.log(testElement);

// console.log(document.body.style.background = 'green');

// // const third = document.querySelectorAll('.main-text').children[2].dataset.property
// const third = document.querySelector("[data-property='2']")
// console.log(document.querySelectorAll('.main-text').dataset.property);

const allElements = document.querySelectorAll('.main-text')

allElements.forEach((el, index, array) => {
    // allElements.dataset.property = '2'
    const nextSibing = el.nextElementSibling;
    if(nextSibing) el.dataset.property = nextSibing.dataset.property
    else el.dataset.property = array[0].dataset.property
})

// for(let i = 0; i < sell.length; i++) {
//     // sell[i] 
//     console.log(sell[i]);
    
    // console.log(sell[i]);
    
// }

// console.log(oneSel);
// console.log(document.querySelector("[data-property='3']"));
// const result = oneSel.dataset.property = '12';


