

const elem = document.querySelectorAll('.biig')[0];

elem.addEventListener('click', (e) => {
    e.target = elem.style.background = 'red'
})




// const root = document.querySelector('#parent');
// root.addEventListener('click', (e) => {
//     if(e.target.dataset.property) {
//         console.log(e.target.dataset.property); // Элемент на который мы нажали
//     }   
//     // console.log(e.currentTarget); // Элемент на который поешено событие
// })