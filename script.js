// const container = document.querySelector('#container');
// const loading = document.createElement('li');
// loading.innerText = "Loading..."
// container.append(loading)

// document.addEventListener('dataSuccessful', (props) => {
//     console.log(props.detail);
// })

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => {
//         document.dispatchEvent(new CustomEvent
//         ('dataSuccessful', {
//             detail: json
//         }))
//         container.innerHTML = ''
//     });

// HOME WORK |||||

    //   const id = setInterval(function() {
    //     if(data){
    //         console.log(data);
    //         clearInterval(id)
    //       }
    
    //   },100) 
      

//     const container = document.querySelector('#container');


// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => {

//         const {completed, inProgress} = json.reduce((prev, cur) => {
            
//             if(cur.completed) {
//                 prev.completed.push(cur);
//             } else {
//                 prev.inProgress.push(cur);
//             }

//             return prev
//         },
//         {
//             completed: [],
//             inProgress: [],

//         })
//         console.log(completed);
//         console.log(inProgress);
//     });


//     const obj = {
//         id: 1,
//         name: 'Artyom',
//     }
//     const {id, name} = obj;


// const second = 1000;
// const minute = second * 60;
// const hour = minute * 60;
// const data = new Date(Date.now())

// document.cookie = 'user=Artyom; max-age=' + 1000;




const obj = {
    id: 1,
    name: 'hello'
}

localStorage.setItem('Ifrit', JSON.stringify(obj))

console.log(JSON.parse(localStorage.getItem('Ifrit')));

setTimeout(() => {
    localStorage.removeItem('Ifrit', JSON.stringify(obj))
    console.log(JSON.parse(localStorage.getItem('Ifrit')));
}, 1000);

