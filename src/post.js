// if (true) {
//     let a = 5;
// }

// console.log(a);

// const arr = [1, 2, 3];

// console.log(arr);

// arr.push(2);
// console.log(arr);

// setTimeout(() => console.log(1), 1000)

// const log = function() {
//     console.log(this);
// }

// const arrowLog = () => {
//     console.log(this);
// }

// const person = {
//     name: 'Elena',
//     age: 18,
//     log: log,
//     arrowLog: arrowLog,
//     delayLog: function() {
//         setTimeout(() => {
//             console.log(this.name + ' ' + this.age);
//         }, 500)
//     }
// }

// person.delayLog();

// const hi = 'Hello';
// const inVisible = () => Math.random() >= 0.5;


// const template = `
//     ${inVisible() ? "Visible" : ""}
//     ${hi} 

// `

// console.log(template.trim());

// class Person {
//     constructor(name) {
//         this.name = name;
//     };

//     sayHi() {
//         console.log("Hello".concat(` ${this.name}`));
//     }
// }

// const artyom = new Person('Artyom');
// // artyom.sayHi();

// class NoResidents extends Person {
//     constructor(name, residents) {
//         super(name);
//         this._residents = residents;
//     }

//     get residents() {
//         return this._residents;
//     }
//     set residents(residents) {
//         if (residents.length < 2) {
//             console.log('Validation Failed')
//         } else {
//             this._residents = residents;
//         }
//     }

//     sayHi() {
//         super.sayHi();
//         console.log(`Hello ${this.name} are you ${this._residents}`);
//     }

// }
// const egor = new NoResidents('Egor', 'NoResidents');

// // egor.sayHi();
// console.log(egor.residents);
// egor.residents = '1'
// console.log(egor.residents);


export default class Post {
    constructor(title) {
        this.title = title
        this.data = new Date()
    };

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.data.toJSON()
        })
    }

    get uppercaseTitle() {
        return this.title.toUpperCase()
    }
}
