let divViolet = document.body.querySelector('.violet');
let divIndigo = document.body.querySelector('.indigo')
let divBlue = document.body.querySelector('.blue')
let divGreen = document.body.querySelector('.green')
let divYellow = document.body.querySelector('.yellow')
let divOrange = document.body.querySelector('.orange')
let divRed = document.body.querySelector('.red')


divViolet.remove();
divBlue.prepend(divIndigo);
divGreen.prepend(divBlue);
divYellow.prepend(divGreen);
divOrange.prepend(divYellow);
divRed.prepend(divOrange);

//1