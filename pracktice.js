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
// console.log(pen);


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
// console.log(job1);

/* --------------------------------ES-6-------------------------------- */
/* 1. template string ${} */
const temp = `i will do template string`;
const templateResult = `abcd ${temp}`
// console.log(templateResult)

/* spread (...)  */

const number = [15, 25, 43, 26];
// console.log(number)
// console.log(...number)

let number1 = [];
let new1 = [...number];
new1.push(1001)
number1 = new1;
console.log(...number1)
const math = Math.max(...new1);
const mathMin = Math.min(...new1);
// console.log(mathMin)

/* 2.1 copy an array then add a new element to an array */
const pincode = [125462, 124596, 458978];
const copy = [...pincode, 123];

console.log(...copy);

/* 2.1 use filter to remove an element from an array */
const product = [
    { name: 'computer', price: 45000, storage: '8 GB' },
    { name: 'iphone', price: 61000, storage: '10 GB' },
    { name: 'laptop', price: 39000, storage: '4 GB' },
]

const filter = product.filter(p => p.name !== 'iphone');
const filter2 = product.filter(x => x.name !== 'laptop');
// console.log(filter);
// console.log(filter2);

/* 3. ---Arrow function---*/
// function expression(anonymus)
const add = function add1(num1, num2) {
    return num1 + num2;
};
const sum = add(13, 12);
// console.log(sum);


const add1 = (num2, num3) => num2 + num3;
const sum2 = add1(9, 12);
// console.log(sum2)

/* 3.1 no parameter () */
const add2 = () => 'md saheb'
const sum3 = add2();
// console.log(sum3)

/* 3.2 single parameter */

const add3 = num4 => num4 * 5;
const sum4 = add3(6);
// console.log(sum4)

/* 3.3 multiple parameters () */
const multiLine = (num5, num6) => {
    const plus = num5 + num6;
    const minus = num5 - num6;
    const multiPly = plus + minus;
    const output = multiPly * 5;
    return output;
}
const sum5 = multiLine(9, 6);
console.log(sum5)


/* 4 destructuring : object destructuring ,array destructuring  */
const person = { name: 'MD Saheb ali ', job: 'lear webdevelopment', goal: 'freelancing' }
const { name, goal } = person;
// console.log(name, goal);

const [age1, name1] = [25, 'md saheb ali', 12, 'learn webdevelopment', 46, 'freelancing', 49];
console.log(age1, name1)

/* 5. object declaration shorthand */

/* 6. function parameter default value  */

function defultValue(golden = 70000, dimond = 'i dont know dimond price') {
    const result2 = golden + 5;
    return result2;

}
const goldenPrice = defultValue()
console.log(goldenPrice)

/* 7. Optional chaining (?.)(optional chining erorr handliong এর ক্ষেত্রে যখন চেনিং করার সমায় কন কারনে ভুল হয় তবে ? চিন্ন দিলে এরর তা দিবে না কিন্তু undefind দেখাবে  )*/
const amazon = {
    employer: {
        name: 'stov',
        job: 'frontend developer',

    },
    employer2: {
        name: 'tom',
        job: 'frontend developer',
        web: {
            tech: 'web developer',
            first: 'graphix disigner',
            second: 'webdesigner'

        }
    }
}

// console.log(amazon.employer2.web.tech);
console.log(amazon?.beck?.web?.tech);


