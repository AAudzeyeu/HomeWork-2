const string = 'qweqweqweLorem we need Loremto check Lorem up Lorem, nice to meet you'

// let check = 0;

// for(let i = 0; i < string.length; i++) {
//     if (string.includes('qwe')) {
//         check++;
//     }
// }
// console.log(check);
// const regex = new RegExp("Lorem", 'gi')
const regex = /Lorem/gi
const regexInMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
console.log(regex.test(string));
