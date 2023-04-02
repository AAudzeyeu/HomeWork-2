

const elem = document.querySelectorAll('.biig');

elem.addEventListener('click', (e) => {
    e.target = elem.style.color = 'red'
})


let scrollButtom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
console.log(`TOP ${elem.scrollTop}`);
console.log(`BOTTOM ${scrollButtom}`);



// const root = document.querySelector('#parent');
// root.addEventListener('click', (e) => {
//     if(e.target.dataset.property) {
//         console.log(e.target.dataset.property); // Элемент на который мы нажали
//     }   
//     // console.log(e.currentTarget); // Элемент на который поешено событие
// })