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

/* 1.6 Object property, including array, object */

const user = {
    name: 'rohim', age: 26, hisPhone: 'vivo',
    profesion: 'any work',
    hoby: {
        cricket: 'my feverite game',
        football: 'my part time game',
    },
    job: {
        profesion: 'learn Webdevelopment'
    },
    number: [25, 23, 15, 63,]

}
const user2 = `I ${user.job.profesion}`;
// console.log(user2);


/* ES6
1. template string ${}
2. spread (...) 
2.1 copy an array then add a new element to an array 
2.1 use filter to remove an element from an array
3. Arrow function
3.1 no parameter ()
3.2 single parameter 
3.3 multiple parameters ()
3.4 multi line 
4 destructuring : object destructuring ,array destructuring 
5. object declaration shorthand
6. function parameter default value
7. Optional chaining (?.) */

const templateStr = {
    name: 'rohim', age: 26, hisPhone: 'vivo',
    profesion: 'any work',
    hoby: {
        cricket: ' cricket my feverite game',
        football: 'my part time game',
    },
    job: {
        profesion: 'learn Webdevelopment'
    },
}

const myName = `my name ${templateStr.name}`;
const myHoby = `my fouvarite game ${templateStr.hoby.cricket}`
// console.log(myHoby)

/* spread (...) */
const spredad = [54, 25, 63, 16,];
// console.log(...spredad)

/* 2.1 copy an array then add a new element to an array  */

const spredad2 = [...spredad, 55];
console.log(...spredad2);

/* 2.1 use filter to remove an element from an array*/
const fill = [
    { name: 'bag', color: 'red', price: 309 },
    { name: 'bottol', color: 'yellow', price: 150 },
    { name: 'shoes', color: 'black&white', price: 510 }
]
// function fillter1(p) {
//     const useFillter = fill.filter(p !== 'bag');
//     console.log(useFillter);
// }
// const checkFillter = fillter1(fill);
// console.log(checkFillter);

const checkFillter = fill.filter(p => p.name != 'bag');
// console.log(checkFillter)

/* 3. Arrow function */
/* 3.1 no parameter ()*/


const add = () => 'Md saheb';
const mdSaheb = add();
// console.log(mdSaheb);

/* 3.2 single parameter  */
const add2 = p => p * 2;
const sum = add2(3);
// console.log(sum);

/*  3.3 multiple parameters ()*/
const add3 = (num1, num2) => num1 * num2;
const sum2 = add3(5, 15);
// console.log(sum2)

/* 3.4 multi line  */

const add4 = (num3, num4) => {
    const plus = num3 + num4;
    const minus = num3 - num4;
    const multiplay = plus * minus;
    return multiplay
}

const multiplearrow = add4(18, 12);
// console.log(multiplearrow)

/* 4 destructuring : object destructuring ,array destructuring */

const objUser = {
    name: 'allexa', price: 3200, color: 'red',

}
const { name } = objUser;
// console.log(name);

/* array destructruing */
const [a, b, c, d] = [25, 36, 45, 96,];
// console.log(a, b, c);

/* 5. object declaration shorthand */

const name2 = 'sirajdullha '
const area = 'murshidabad'

/* reguler */
// const nobab = {
//     name2: name2,
//     area: area
// }

/* short hand/ shortcut */
const nobab2 = { name2, area }
// console.log(nobab2)

/* 6. function parameter default value */
function defaultParameter(x = 255, y = 55) {
    return x + y;
}
const defaultParameterTotal = defaultParameter()
// console.log(defaultParameterTotal)

/* 7. Optional chaining (?.) */

const flipcurt = {
    product: 'hareshampoo', price: 356, description: {
        mfgyear: 2021,
        expryyear: 2023,
        note: 'pleas use a rulse mandatory'
    }
}

// console.log(flipcurt?.beck?.note)
/* ---------------------------------------------------- */

/* Browser API*/
/* 1. local storage session stoage */
function addinput() {
    const addInput = document.getElementById('addInput');
    const id = addInput.value;
    const addValue = document.getElementById('addValue');
    const input = addValue.value;
    if (id && input) {
        localStorage.setItem(id, input);
    }

    addInput.value = '';
    addValue.value = '';
}


// 2. location API
const reloadLocation = () => {
    location.reload()
}

const goToNextSite = () => {
    location.assign('https://www.youtube.com/watch?v=uB6vNq_0ajo&list=RDMMuB6vNq_0ajo&start_radio=1')
}

// 3. History API
const backword1 = () => {
    history.back();
}

const forword = () => {
    history.forward();
}

const go = () => {
    history.go(3)
}

// 4. fetch 
const loadQuoates = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal')
        .then(res => res.json())
        .then(data => dispalyQuoates(data))
}
const dispalyQuoates = (quoat) => {
    // console.log(quoat.teams)
    const quoatEliment = document.getElementById('quoate');
    // quoatEliment.innerText = quoat.teams[1]
}


/* Others
1. array: map, forEach, filter, find */
const arrayMap = [5, 6, 9, 8];
const arrayMap2 = arrayMap.map(x => x * 2);
const squares = arrayMap.map(x => x * 4);
// console.log(squares)
const product1 = [
    { name: 'power Bank', price: 1110, color: 'skyBlue' },
    { name: 'keyBord', price: 1700, color: 'black' },
]
// product1.forEach(p => console.log(p));

const product2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, , 9, 10, 11, 12, 13, 14, 15, , 16, 17];
const arrayFillter = product2.filter(p => p > 10);
const arrayFillter2 = product2.filter(p => p < 10);
// console.log(arrayFillter)

const product3 = [
    { name: 'webdevelopment full course', price: 5500, duration: '6months' },
    { name: 'web disign full course ', price: 4200, duration: '6 months' },
    { name: 'graphix disign full course', price: 4800, duration: '3months' }
]
const objFind = product3.find(product => product.price < 4800);
// console.log(objFind)


/* 2. ternary operator  */
const money2 = 110;
let food;
const ternary = money2 > 200 ? 'biriyany' : 'chabiskut';
// console.log(ternary)

/* 3. logical and logical or && || */
const myVar = 90;
const myMoney = 80;
const drink = (myVar && myMoney) ? 'cook' : 'fillter water';
// console.log(drink)
const drink2 = (myVar > 200 || myMoney > 70) ? 'cokacola' : 'minarel water';
// console.log(drink2)

const isactive = false;
const showuser = () => console.log('showUser');
const hideuser = () => console.log('hideUser');
isactive ? showuser() : hideuser()


// 4. JOSN (stringify, parse)
const shop = {
    name: 'kannika store',
    product: 'mobile,laptop,iphon',
    woner: {
        name: 'kannika',
        profesion: 'actor'
    },
    profit: 800,
    isexpensive: true
}
const shopjson = JSON.stringify(shop);
const shopjsonParse = JSON.parse(shopjson)
// console.log(shopjsonParse)

// 5. +,
const numToString = 102;
const convertStr = numToString + '';
// console.log(convertStr)
const strToNumber = '45';
const convertnum = +strToNumber;
console.log(convertnum)