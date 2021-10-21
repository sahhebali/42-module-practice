// Task-1 Fundamentals

/*1.1 tree type variablse */
var myNameM = 'Md Saheb';         /* string type */
let myAge = 25;                  /* number type:  will be chang*/
const myBirthOfYear = 1996;      /* const not will be change  */
const sunWakeUp = ('East', true);  /* boolian type */

/* 1.2 condition */
const egg = 100;   /* < lesthan condition */
const myMony = 50;
if (egg < myMony) {
    // console.log('100 takay dile egg kinbo na');
}
else {
    // console.log('50 taka hole kinbo ');
}
/* geterthen condition */
const brotherAge = 25;
const sisterAge = 21;
const ageCalculete = brotherAge > sisterAge;
// console.log(ageCalculete);

/* duble== equal(soman kina ): triple equal=== (check data type) */
const chiken = 100;
const beep = 100;
if (chiken == beep) {
    // console.log('get only chiken , beep')
}
else {
    // console.log('get anything')
}

const appele = 90;
const orange = "90";
if (appele === orange) {
    // console.log('md saheb');
}

/* != not equal (dutoi osoman kina ) */
const iphon = 81000;
const samsungTab = 81000;
if (samsungTab != 80000) {
    // console.log('iphone');
}
else {
    // console.log('samsung tab')
}

/* <= (bam pase jeta ache seta dan paser theke choto ba soman kina ) */
const mobilePrice = 15000;
const iphonePrice = 80000;
if (mobilePrice <= iphonePrice) {
    const byingMobile = 'samsung phone kinbo '
    // console.log(byingMobile)
}
else {
    const byingIphone = 'iphone kinbo';
    // console.log(byingIphone)

}



/* >= (bam pase ja ache dan paser theke boro ba soaman kina ) */

const offLineBooks = 100;
const onlineBooks = 80;
if (offLineBooks >= 100) {
    // console.log('offLine books')
}
else {
    // console.log('online books')
}

/* &&(bam pas ebong dan paser duto sorto puron korte hobe ) */



const getJob = true;
const home = false;
const money1 = 2500000;
if (getJob && money1 >= 300000) {
    // console.log('tomar chakri & bari thakle tumi allowed  hobe')
}
else {
    // console.log('not allowed')
}



/* ||( eitar mane hoche bam ebong dan paser je kono ekta jodi sotto hote hobe) */
if (getJob || home) {
    // console.log('omar chakri othoba bari jodi thake tob tumi allowed hobe ')
}
else {
    // console.log('you not allowed')
}




/* --------------
1.3 array: declare, length, index, push, pop, indexOf, includes
 ----------------*/
/* array declare */
const mobileNumber = [3010, 8759, 'md saheb', 6456, 'ali', 'mehedi', 2559];
const includdd = mobileNumber.includes('mehedi')
const serch = mobileNumber.indexOf('mehedi')
const last = mobileNumber.lastIndexOf(8759, 3)
mobileNumber.push(9932);
mobileNumber.pop()
const arrayCount = mobileNumber.length;
const arrayIndex = mobileNumber[3]
console.log(includdd);




/*-----------
 1.4 for loop, while
 ------------ */
/* for loop  */
const getPen = 5;
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
/* while loop */
// let a = 1;
// while (a <= 5) {
//     console.log(a + '', 'hello java script')
//     a = a + 1;
// }


// let count = 1;
// while (count <= 5) {
//     console.log(count + '', 'hello java script')
//     count = count + 1;
// }


/* 1.5 function return parameter */

function age(robin, sochin) {
    const result = robin + sochin;
    return result;
}

const totalAge = age(15, 20)
// console.log(totalAge);


/* 1.6 Object property, including array, object */

const game = {
    cricet: 'india',
    footbool: 'brazil',

    indianCriceter: ['Ms dhoni', 'Virat Kholi', 'Rohit shorma', 'Reshav Pant', 'Sriyas Iare', 'Raindra Jadeja',
        'Bhumra',],
    MsDhoni: {
        name: 'Dhoni',
        job: 'cricet',
        age: 40,
        movi: {
            moviName: 'Ms dhoni(The untold story)',
            others: 'footbool'
        }
    }

}
const findDhoni = `the most valuble  indian cricet player ${game.MsDhoni.name}`
// console.log(findDhoni);


/*****************  ES-6 ************/
/*--------
 1. template string ${}
---------- */
const temp = 'i am created template string';
const tempResult = `result found (yes) ${temp}`
// console.log(tempResult);

const firstName = 'MD';
const lastName = 'Saheb';
function fullname(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
const nameresult = `hello ${fullname(firstName, lastName)}`
// console.log(nameresult);


/* spread (...) */
// const numbers = [12, 32, 55, 88];
// console.log(numbers);
// console.log(...numbers);

const numbers = [25, 89, 991, 45];
numbers.push(1000)
const max = Math.max(...numbers)
const numbers2 = Math.min(...numbers, 1001)
// console.log(numbers2);

/*------
 2.1 copy an array then add a new element to an array 
-------- */
const pinCode = [742135, 742121, 741235];
const pinCode2 = [...pinCode, 123000]
// console.log(pinCode2);
const product = [
    { name: 'laptop', price: 25000, color: 'pink' },
    { name: 'phone', price: 15000, color: 'golden' },
    { name: 'fan', price: 1500, color: 'white' }
]

const newProduct = { name: 'macbook', price: 80000, color: 'silver' }
const newproducts = [...product, newProduct]

/*-----
 2.1 use filter to remove an element from an array
 ------*/
const remaining = product.filter(p => p.name !== 'laptop')
console.log(remaining)


// 3. Arrow function
// function expression(anonymus)
const add1 = function add1(num1, num2) {
    return num1 + num2;
}
const sum = add1(15, 17);
/* arrow function */
const add2 = (num1, num2) => num1 + num2;
const sum2 = add2(20, 30);
// console.log(sum, sum2)

/* 3.1 no parameter () */
const add3 = () => 'Md Saheb';
const name = add3();
console.log(name);
/*--------
3.2 single parameter (parameter jodi 1 ta hoy tobe 1st braket naw dite paro exzample: const add3 = num =>num*5)
 --------*/
const add4 = (num) => num * 5;
const sum3 = add4(6);
// console.log(sum3)

// console.log(totalNewGroup)



/*---------
3.3 multiple parameters ()
 ----------*/





/* 3.4 multi line arow function:  onek line arrow function jodi likte hoy tobe tumi {} third brfaket er moddhe likba & return korba*/
// const add5 = (x, y) => {
//     const plus = x + y;
//     const difrence = x - y;
//     const multiply = plus * difrence;
//     const output = multiply * 5;
//     return output;
// }
// const total = add5(12, 5);
// console.log(total)



/* 4 destructuring : object destructuring   */

const user = {
    myName: 'Md saheb ',
    id: 5,
    game: { cricet: 'my favarit game ', badminton: 'i lick badminton' },
    hoby: 'elektric parts try',
    job: 'learn webdeveloper',
}
const { myName, job } = user;
// console.log(myName, job);

/* array destructuring */
const [a, b, c] = [25, 26, 12];
// console.log(a, b, c);
const [name1, age1, addres1] = ['Md saheb', 25, 'bhagwangola'];
// console.log(name1, age1, addres1);


/*  --------5. object declaration shorthand --------*/

/* ------6. function parameter default value------ */

function defaultParameter(a = 2, b = 5) {
    console.log(a + b)
}

const sum9 = defaultParameter();
console.log(sum9)


/* Browser API*/
/*------1. local storage  , session stoage-(sesion storage ta browser a laptop bondo ba onno kono website a gele sesion storage chole jay kintu Local storage theke jay)*/

// sessionStorage.setItem('md saheb id ', 7);

function AddToLocalStorage() {
    const addInput = document.getElementById('storage-id');
    const id = addInput.value;
    const addValue = document.getElementById('storage-value');
    const value = addValue.value;

    if (id && value) {
        localStorage.setItem(id, value);
    }
    addInput.value = '';
    addValue.value = '';
}


/*  2. location API ( ব্রাউজার এ লোকেশান নামে এক্ টা  জিনিস আছে আ এ টার বিভিন্ন অংস কে আমরা আকসেস করতে পারি যেমন location.hash,href,host,ashin, ETC... ) */
const relodLocation = () => {
    location.reload();
}

const addhref = () => {
    location.assign('https://web.programming-hero.com/')
}


/* 3. History API ( history api হছে যে আমি যে পেজ আছি সেই পেজ এ কতটা 
    পেজ ওপেন করেছি তা history.length দিয়ে চেক করতে পারবো এবং ( < history.back, >history.forword কনো পেজ এর আগে ও পরে জেতে পারব ), and (go দিয়ে forword and backword এর দুটো কাজ ঈ করতে পারব) )*/

const backword = () => {
    history.back()
}
const forword = () => {
    history.forward()
}
const go = () => {
    history.go(2);
}


/* -------------4. fetch------------- */

const loadQuoates = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displatQuoate(data));
}

const displatQuoate = quote => {
    // console.log(quote.quote);
    const quaoteEliment = document.getElementById('quoate');
    quaoteEliment.innerText = quote.quote;

}


/* Others
1. array: map, forEach, filter, find */
/* array: map */

const numbers3 = [4, 6, 8, 10];
const result1 = numbers3.map(x => x * 2);
// console.log(result1);
const squares = numbers3.map(x => x * x)
// console.log(squares);
const product1 = [
    { name: 'mobile', price: 15000, color: 'green' },
    { name: 'bottol', price: 100, color: 'yeallo' },
    { name: 'pen', price: 25, color: 'red' }
]
const productResult = product1.map(p => p.color);
// console.log(productResult);

/* forEach  .map kono kichu return korbe but forEach kono kichu return korbe na */
const product2 = [
    { name: 'ms dhoni', run: 15000, 50: '50th', 100: '26th' },
    { name: 'sachin tendulkar', run: 17000, 50: '150th', 100: '100th' },
]
product2.forEach(p => console.log(p));
// console.log(productTotal)


/*------ filter  & find--(fillter korle array & array er moddhe thaka object ta ke dibe kin FIND korle sudu object ta ke dibe (emon kichu fillter korlam je jeta nay tokhon tomake result hisebe ekta emty[] array dibe )) */

const milstone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 50];
const bigMilstone = milstone.filter(m => m > 10);
const smallMilstone = milstone.filter(m => m < 10);
// console.log(bigMilstone)
// console.log(smallMilstone)

const product3 = [
    { name: 'webdevelopment full course', price: 5500, duration: '6months' },
    { name: 'web disign full course ', price: 4200, duration: '6 months' },
    { name: 'graphix disign full course', price: 4800, duration: '3months' }
]

const crascourse = product3.filter(product => product.name == 'webdevelopment full course')
// console.log(crascourse)
const crascourseFind = product3.find(product => product.price > 4200);
// console.log(crascourseFind)

/* ternary operator (ei ta old system but ternary oparater diey shortvurt  kore kora jay ) */

const money2 = 80;
let food;
if (money2 > 100) {
    food = 'biriyany';
}
else {
    food = 'cha biskut'
}
// console.log(food)
/* ternary operator */
const food1 = money2 > 100 ? 'biriyany' : 'cha biskut'
// console.log(food1)



/* 3. logical &&, logical ||   */
const myVar = 105;
const money3 = 101;
const drink = (myVar > 100 && money3 > 100) ? 'coke' : 'fillter water';
// console.log(drink);

const drink2 = (myVar > 200 || money3 > 100) ? 'cokacola' : 'minarel water'
// console.log(drink2)
const isactiv = false;
const showuser = () => console.log('displayuser');
const hideUser = () => console.log('hide User');
isactiv ? showuser() : hideUser();


/*  JOSN (stringify, parse) */
const shop = {
    name: 'kannika store',
    product: ['mobiole,laptop,iphone,tab'],
    profit: 15000,
    woner: {
        name: 'sravan',
        profesion: 'actor'
    },
    isexpensive: false,

}
const shopstr = JSON.stringify(shop);
const shopparse = JSON.parse(shopstr)
console.log(shopstr)
console.log(shop)
console.log(shopparse);


/* 5. +, */
// number to string
const numberToString = 42;
const numberstr = numberToString + '';
// console.log(numberstr)

// striong to number 
const stringTonumber = '102';
const strnumber = +stringTonumber;
console.log(strnumber)










// if (new Date().getHours() < 18) {
//     document.getElementById("demo").innerHTML = "Good day!";
//   }

// const hour = new Date().getHours();
// let greeting;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

