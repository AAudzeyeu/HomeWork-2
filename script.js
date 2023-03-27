// function curry(f) {
//     return function(a) {
//         return function(b) {
//             return f(a, b);
//         };
//     };
// }
// function sum(a, b) {
    
//     return a + b;
// }
// let curriedSum = curry(sum);
// console.log(curriedSum(1)(2));



// const infiniteCurry = (fn, seed) => {
    //     const reduceValue = (args, seedValue) =>
//       args.reduce((acc, a) => {
    //         return fn.call(fn, acc, a);
    //       }, seedValue);
    //     const next = (...args) => {
        //       return (...x) => {
//         if (!x.length) {
//           return reduceValue(args, seed);
//         }
//         return next(...args, reduceValue(x, seed));
//       };
//     };
//     return next();
//   };

//   const iSum = infiniteCurry((x, y) => x + y, 0);

//   console.log(iSum(1)(2)(3)(4));

// function curry(func) {
//     return function curried(...args) {
//         if(args.length >= func.length) {
//             let result = args.reduce(function(sum, elem) {
//                 return sum + elem
//             }, 0);
//             console.log(result);
//             return func.apply(this, args);
//         } else {
//             return function(...args2) {
//                 return curried.apply(this, args.concat(...args2));
//             }
//         }
//     };
// }

// function sum(a, b, c) {
//     return a + b + c;
// }
// 
//

// function sumAll(...args3) {
//     let sum = 0;
//     for (arg of args3) sum += arg;
//     return sum;
// }



    


// let curriedSum = curry(Sum.sum());

// console.log(curriedSum(1)(2));

// const sum  = function (a) {
//     return function (b) {
//       if (b) {
//         return sum(a+b);
//       }
//       return a; 
//     }
//   };


//   console.log(sum(1)(2)()); 
//   console.log(sum(1)(2)(3)(4)(5)(6)());


// function add(a){
//     function sum(b){
//        a =   a+b;
//        return sum;
//     }
//     sum.toString = function(){return a;}
//     return sum;
//    }
//    const result = add(1)(2)(3)(4);

//    console.log(result);

function f(value) {
    let currientSum = value;

    function f(number) {
        currientSum += number;
        return f;
    }

    f.toString = function() {
        console.log(currientSum);
        return currientSum;
    };
    
    return f;
}


console.log(f(1)(2));
console.log(f(1)(2)(3));

