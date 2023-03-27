const sumFunction = function(...args) {
    this.args = args
    let arr = args.splice(' ');
    arr = arr.push(arr)
    console.log(arr);
}

sumFunction(1, 2, 3);