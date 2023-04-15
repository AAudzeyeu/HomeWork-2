// const makeRequestNew = (method, url) => { РЕСЕТ АПИ !!!
//     return fetch(url, {
//         method
//     })
// }

// makeRequestNew('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// .then(data => {
//     if (data.ok) return data.json()
//     if (data.status === 404) throw new Error('requested data does not exist')
//     else if (data.status === 500) throw new Error('server is sleeping')
// })
// .then(data => {
//     console.log(data);
// })
// .catch(e => {
//     console.log(e);
// })

// const data = JSON.stringify( {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },)


// const makeRequestNew = (method, url, body) => {
//     return fetch(url, {
//         method,
//         body
//     })
// }

// makeRequestNew('PUT', 'https://jsonplaceholder.typicode.com/posts/1')
// .then(data => {
//     return data.json()
// })
// .then(data => {
//     console.log(data);
// })


// const data = JSON.stringify({
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },)

// const makeRequest = (method, url) => {
//     return fetch(url, {
//         method,
//     })
// }

// makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1')
//     .then(data => {
//         return data.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log(e);
//     })

//     const func = async () => {
//         try {
//             const data = await makeRequest('GET',
//                 'https://jsonplaceholder.typicode.com/posts/1')
//             const json = await data.json();

//             console.log(json);
//         } catch (e) {
//             console.log(e);
//         }
//     }
//     func();

const array = [1, 2, 3, 4, 5];
const template = document.querySelector('#template');
const container = document.createElement('ul');
console.log(template);

array.forEach(el => {
    const element = template.content.cloneNode(true);
    element.querySelector('#span').textContent = el

    container.append(element);
})
document.body.append(container);