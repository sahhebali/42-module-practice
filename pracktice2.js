/* Fundamentals
1.1 variable (let, const) three types variable
1.2 condition (<. >, ===, !==. <=, >=) && ||, if-else if-else
1.3 array: declare, length, index, push, pop, indexOf, includes
1.4 for loop, while
1.5 function return parameter
1.6 Object property, including array, object */


let letman = 'hasaaan';
const neverChange = 12;
// var variableIsChanble = true;

const poteto = 40;
const chilliPowder = 23;
const potetoChili = poteto < chilliPowder;
// console.log(potetoChili)

const tometo = 60;
const Eggplant = 45;
if (tometo > Eggplant) {
    // console.log('tometo price is high demand')
}
else {
    'Eggplant is high demand'
}

let cabbage = 40;
let cucumber = '40';
if (cabbage === cucumber) {
    // console.log('they are seam ');
}
else {
    // console.log('they are not seam')
}

const obj = [
    { name: 'rohim', proffesion: 'worker', age: 26 },
    { name: 'tom', profession: 'worker', age: 31 }
]
if (obj !== 'tom') {
    // console.log('tom you are not selectted')
}

const garlickPrice = 100;
const cornPrice = 45;
const garlickCorn = garlickPrice <= cornPrice;
// console.log(garlickCorn);

const beet = 56;
const carret = 25;
if (beet >= carret) {
    // console.log('beet market price high demand')
}
// else (
//     console.log('carret market price high demand ')
// )


const yeangMan = false;
const job = false;
const money = 200000;
const home = true;
if (yeangMan && home) {
    // console.log('you are selected');
}
else if (home || job) {
    // console.log('your selected chances 50%')
}
else {
    // console.log('you are not selected')
}
/* 1.3 array: declare, length, index, push, pop, indexOf, includes */

const array = [15, 25, 36, 45, 63,];
const arrayStr = ['md saheb', 'hamid', 'abuhena', 'roni'];
const arrayL = arrayStr.length;
array.push(90);
arrayStr.pop()
const arrayIndexOf = array.indexOf('rubi')/* array moddhe kono eliment na thakle -1 hobe  */
const arrayIncluded = arrayStr.includes('rubel')/* includes er khetre array er moddhe kono value thakle true & na thakle false dekhabe  */

// console.log(arrayIncluded)
// console.log(arrayIndexOf)
// console.log(arrayStr)

/* 1.4 for loop, while */
// let foor = 1;
// for (let i = 0; i <= 5; i++) {
//     console.log(i)
// }

// const whilee = 1;
// while (whilee === 1) {
//     const i = 0;
//     i + 1;
//     console.log(i)
// }

const available = 5;
const cost = 3;
function returnParameter(home) {
    const develop1 = available * home;
    const develop2 = cost * home;
    const developTotal = develop1 + develop2
    return developTotal;
}
const developResult = returnParameter(6);
console.log(developResult);
