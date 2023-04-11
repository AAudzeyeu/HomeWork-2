// console.log('start');

// const promise = new Promise((resolve, reject) => {
//     console.log('promise body');
//     setTimeout(() => reject('error'), 500)
//     setTimeout(() => resolve('done'), 1000)
// });

// promise.then((data) => {
//     console.log(data);
// }).catch((data) => {
//     console.log(data);
// }).finally(() => console.log('finally'));

// console.log('end');

// console.log('start');

// const promise = new Promise((resolve, reject) => {
//     console.log('promise');
//     setTimeout(() => resolve('done'), Math.random() * 1000);
//     setTimeout(() => reject('error'), Math.random() * 1000);
// });

// promise.then((data) => {
//     console.log(data);
// }).catch((data) => {
//     console.error(data);
// })
// // .finally(() => console.log('finally'));

// console.log('end');


// const createScript = function(path, resolve, reject) {
//     const script = document.createElement('script');
//     script.src = path;
//     if (resolve) script.onload = resolve; 
//     if (reject) script.onerror = reject;

//     document.documentElement.append(script)

// }



// createScript('./test.js', () => test(), () => console.log('script does not exist'));


// const createScript = (path) => {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = path;

//         script.onload = resolve;
//         script.onerror = reject;

//         document.documentElement.append(script)
//     })
// }

// createScript('./test.js')
// .then(() => {test()
//     return 4;
// })
// .then((data) => console.log(data))
// .catch(() => console.log('script does not exist'));

// (function () {

// })();


// const createScript = async function(path, resolve, reject) {
//     const script = document.createElement('script');
//     script.src = path;

//     script.onload
//     resolve();
//     if (reject) script.onerror = reject;

//     document.documentElement.append(script);

// }



// createScript('./test.js', 
// () => test(), 
// () => console.log('script does not exist'));

// async function func() {

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => reject("готово!"), 1000)
//     });

//     try {
//         let result = await promise;
//         console.log(result); 

//     } catch(e) {
//         console.log('hi');
//     }


// }

// func();

// const createScript = (path) => {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = path;

//         script.onload = resolve;
//         script.onerror = reject;

//         document.documentElement.append(script)
//     })
// }


// Promise.race([createScript('./test.js'), createScript('./test.js'), createScript('./test.js')])
//     .then((data) => console.log(data))
//     .catch(() => console.log('script does not exist'))


// const createScript = async (path) => {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = path;

//         const promise = new Promise((resolve, reject) => {
//             resolve(console.log(data));
//         });


//         let result = await promise;

//         document.documentElement.append(script);

//     })
// }

// createScript();
// createScript('./test.js', 
// () => test(), 
// () => console.log('script does not exist'));




(async () => {
    const createElement = (path) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = path;

            script.onload = resolve;
            script.onerror = reject;

            document.documentElement.append(script)
        })
    }

    try {
        const res = await Promise.race([createScript('./test.js'), createScript('./test.js'), createScript('./test.js')])
        console.log(res);
    } catch(e) {
        console.log('script does not exist');
    }   
})();