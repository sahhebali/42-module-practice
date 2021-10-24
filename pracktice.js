/* fundamentals */
/* 1.1 variable (let, const) three types variable */
var mousePrice = 590;
let kebordprice = '1010 rupis';
const upsChargable = true;

/* 1.2 condition (<., >, ===, !==. <=, >=) && ||, if-else if-else*/
const myage = 25
const age = 24;
if (myage < age) {
    // console.log('my age 25')
}
else {
    // console.log('yourAge 24')
}

const myName = 'Md saheb';
const yourName = 'md';
// console.log(myName > yourName);

const erthQuick = true;
const moutEvarestIsbigetHill = false;
if (erthQuick === moutEvarestIsbigetHill) {
    // console.log('mountEvarest is the biggest hill')
}
else {
    // console.log('erth quick is very risk')
}

const laptopaprice = 45000;
const macbookPrice = 60000;
if (laptopaprice !== macbookPrice) {
    // console.log('macbook + laptop dutoi kinbo')
}
{
    // console.log('laptop kinbo')
}



const aegPrice = 7;
const chikenprice = 150;
if (aegPrice <= chikenprice) {
    console.log('aeg kinbo')
}
else {
    console.log('chiken kinbo ')
}

const muttonPrice = 600;
const rostPrice = 300;
if (muttonPrice >= rostPrice) {
    // console.log('mutton kinbo');
}
else {
    // console.log('rost kinbo')
}


const money = 25000;
const room = true;
const job = false;
const handsome = true;
if (money < 50000, room && handsome, job) {
    // console.log('you are select ');
}
else if (money && room || job && handsome) {
    // console.log('you are select but chance 50%')
}

else {
    // console.log('you are  not select ')
}

/* 1.3 array: declare, length, index, push, pop, indexOf, includes */

const friendsnameAge = ['ab', 26, 'cd', 25, 'ef', 27, 'gh', 24];
const length = friendsnameAge.length;
const index = friendsnameAge.indexOf(24);
const push = friendsnameAge.push('ij', 23);
friendsnameAge.pop();
friendsnameAge.pop();
const includes = friendsnameAge.includes('gh')
const lastIndexOf = friendsnameAge.lastIndexOf('ef')
// console.log(lastIndexOf)


/* 1.4 for loop, while */

/* while loop  */
let threeTimes = 1;
while (threeTimes <= 3) {
    const age = 5;
    const ageQuantity = 2;
    const multiply = age * ageQuantity;
    threeTimes = threeTimes + 1;
    // console.log(multiply)
}
/* for loop  */

let zero = 0;
for (let i = 0; i <= 5; i++) {
    // console.log(i)
}

/* 1.5 function return parameter */

function penCount(pen1, pen2) {
    const result = pen1 + pen2;
    return result;
}

const pen = penCount(3, 6)
console.log(pen);


/* 1.6 Object property, including array, object */

const object = {
    name: 'md saheb',
    age: 25,
    addres: {
        vill: 'Nowsera',
        po: 'Hanumantnagar',
        ps: 'Bhagwangola',
        dist: 'murshidabad',
        state: 'westbengal',
        pin: 742135,
    },
    hoby: 'criket',
    likes: {
        criketer: 'ms dhoni',
        badminton: 'sania',
        singer: 'Arijit',
        actor: 'kannika kapur',
    },
    job1: ['learn webdevelopment']
}

const findAddres = `find the addres ${object.addres.dist}`
const job1 = `i am a student ${object.job1}`
console.log(job1);