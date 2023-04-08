// let i = 0;

// setTimeout(() => console.log(i), 100); // ?
// console.time('test')

// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

// console.timeEnd('test')

// const div = document.querySelector('#div');

// div.addEventListener('mouseover', function(e) {
//     console.log(e);
//     const width = e.currentTarget.offsetWidth;
//     const height = e.currentTarget.offsetHeight
//     const widthElement = e.currentTarget

//     console.log(width);
//     console.log(height);
//     widthElement.style.width = `${width}px`
//     const id = setInterval(function(e) {
//         if(parseInt(widthElement.style.width) > 50) {
//             console.log(widthElement);
//             widthElement.style.width = `${parseInt(widthElement.style.width) - 1}px`
//             console.log(widthElement.style.width);
//         } else {
//             clearInterval(id);
//         }
//     }, 100)
// })

// class MyError extends Error {

// 

// const data = []

// const form = document.querySelector('#form');



// try {
//     try {
//         if (!data.length) throw new Error('empty data')
//         data.forEach(function (element) {
//             console.log(element);
//         });

//     } catch (e) {
//         if (e.message === 'empty data') console.log(e);
//         else throw e
//     } 
// } catch (e) {
//     console.log(e);
// }

// window.onerror = function(e) {
//     console.log(e);
// }

// try {
//     if (!data.length) throw new Error('empty data')
//     data.forEach(function (element) {
//         console.log(element);
//     });

// } catch (e) {
//     if (e.message === 'empty data') {
//         form.innerHTML = 'нет данных в форму'
//         console.log(e)
//     } else throw e

// } 

// try {
// // Код потенциально содержащий ошибку
// } catch (e) {
// // Обработчик ошибок
// }


// class MyError extends Error {
//     constructor(message) {
//         super(message)
//         this.name = 'MyError'
//     }
// }

// throw new MyError('My error')

// try {

// }
// catch (e) {
//     if(e.name === 'MyError')
//     else {

//     }
// 

const data = undefined



// try {
//     try {

//         if (data === undefined) throw new Error('data is undefiend')
//         data.forEach(function (element) {
//             console.log(element);
//         });

//     } catch (e) {
//         if (e.message === 'data is undefiend') {
//         } else throw e
//         console.log(e)

//     }
//     if (!data.length) throw new Error('empty data')
//     data.forEach(function (element) {
//         console.log(element);
//     });


// } catch (e) {
//     if (e.message === 'empty data') {
//         form.innerHTML = 'нет данных в форму'
//         console.log(e)
//     } else throw e
// }

// try {

//     if (data === undefined) throw new Error('data is undefiend')
//     data.forEach(function (element) {
//         console.log(element);
//     });

// } catch (e) {
//     if (e.message === 'data is undefiend') {
//     } else throw e
//     console.log(e)

// }

const noDataErrorMessage = 'invalid data';
const emptyDataErrorMessage = 'empty data';
const noFormElementMessage = 'form element does not exist';

window,onerror = function(e) {
    console.log('unexpected error:', e);
}

try {
    const data = undefined;
    const form = document.querySelector('form');
    let formElements;

    try {
        try {
            if (!data.length) throw new Error(emptyDataErrorMessage);
            formElements = data.map((element) => element);
        } catch (e) {
            if (e.message === emptyDataErrorMessage) console.log(e);
            else throw new Error(noDataErrorMessage);
        }

    } catch (e) {
        if(e.message === noDataErrorMessage) console.log(e);
    }
    if(form) form.append(...formElements);
    else throw new Error(noFormElementMessage)

} catch (e) {
    if(e.message === noFormElementMessage) console.log(e);
}