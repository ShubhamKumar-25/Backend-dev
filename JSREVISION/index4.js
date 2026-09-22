// function step1(callback){
//     setTimeout(() => {
//         console.log("Pani ubal gaya hai");
//         callback();
//     }, 1000);
// }

// function step2(callback){
//     setTimeout(() => {
//         console.log("Chai patti dalo.");
//         callback();
//     }, 1000)
// }

// step1(() => {
//     step2(() => {
//         console.log("Chai ready hai aa ke le jao.");
//     })
// })


// setTimeout(() => {
//     console.log("--------------------------------------");
// }, 2000);

// function delayTask(msg){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(msg);
//             resolve();
//         }, 2000)
//     })
// }

// delayTask("Oil hot ho gaya hai.")
//     .then(() => delayTask("Abb pakaudhe daalo."))
//     .then(() => delayTask("Abb paukade ko nikal do"));



// async function makeTea() {
//     await delayTask("Pani ubal gaya hai..");
//     await delayTask("Abb chai patti dalo..");
//     await delayTask("Chai ready hai..");
// }
// makeTea();


function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("Shubham"));
}

processUser(greet);


let names = ["Apple", "Banana", "Mango"]
names.forEach((name) => {
    console.log(name);
})


let num = [1, 2, 3, 4];
let result = num.forEach((num1) => {
    return num1 + 3;
})
console.log(result);

console.log("---------------------------------------------------------------");

let num2 = [1, 2, 3, 4, 5];
let result2 = num2.map((num3) => {
    return num3 + 2
})
console.log(result2);

console.log("-----------------------------------------------------------------");

// const prices = [100, 300, 593, 653];
// const double = prices.map((pri) => {
//     return pri * 1.10;
// })
// console.log(double);


const prices = [100, 200, 300];
const newPrices = prices.map(price => +(price * 1.10).toFixed(2));
console.log(newPrices);

console.log("====================================================");
let aa = [20, 34, 89, 10, 55];
let bb = aa.filter((nn) => {
    return nn >= 40;
})
console.log(bb);

console.log("=======================================================");
