// Task-1 Fundamentals

/*1.1 tree type variablse */
var myName = 'Md Saheb';         /* string type */
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
const money = 2500000;
if (getJob && money >= 300000) {
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

const getPen = 5;
for (let i = 0; i <= 5; i++) {
    console.log(i);
}





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

