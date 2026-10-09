
// // Lexical Scoping
// let company = "Google";
// function outer(){
//     let name = "Rohan Gupta";
//     function inner(){
//         console.log(name);
//         console.log(company);
//     }
//     inner();
// }
// outer();
// console.log("---------------------------------------------------");
// // Clouser
// function outer1(){
//     let money = 100;
//     return function inner1(){
//         console.log(money);
//     }
// }
// const res = outer1();
// res();
// console.log("---------------------------------------------------");
// // Promise
// const promise = new Promise((resolve, reject) => {
//     let state = true;
//     if(state){
//         resolve("Delivery successfully🎊");
//     }
//     else{
//         reject("Your order is rejected!!");
//     }
// })
// promise
// .then((data) => console.log(data))
// .catch((err) => console.log(err));
// setTimeout(() => {
//     console.log("---------------------------------------------------");
// }, 1000)
// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         let success = true;
//         setTimeout(() => {
//             if(success){
//                 resolve("Everything is okey.");
//             }else{
//                 reject("Something went wrong");
//             }
//         }, 2000)
//     });
// };
// fetchUser()
// .then((mes) => console.log(mes));


// setTimeout(() => {
//     console.log("---------------------------------------------------");
// }, 2000)

// // async/await
// setTimeout(() => {
//     function fetchUser1(){
//     return Promise.resolve("Shubham Gupta");
// }
// async function showUser(){
//     let resl = await fetchUser1();
//     console.log(resl);
// }

// showUser();
// }, 3000)

// function fetchUser(){
//     return Promise.resolve("One Day i become a richest person in my state.");
// }
// async function showUser(){
//     let res = await fetchUser();
//     console.log(res);
// }
// showUser();

// function fetchUser(){
//     return new Promise((resolve, resject) => {
//         let success = true;
//         setTimeout(() => {
//             if(success){
//                 resolve("One Day i become a richest person in my state.");
//             }
//             else{
//                 resject("Something went wrong.")
//             }
//         }, 2000)
//     })
// }

// async function Show(){
//     let result = await fetchUser();
//     console.log(result);
// }
// Show();




// lexical scoping
// const company = "Amazon";
// function outer(){
//     let name = "Shubham Gupta";
//     function inner(){
//         console.log(company);
//         console.log(name);
//     }
//     inner();
// }
// outer();

// Clouser in Javascript
// function outer(){
//     let count = 1;
//     return function inner(){
//         return count++;
//     }
// }
// let counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let isStudent = true;
//         if(isStudent){
//             resolve("Yes, This is our collage student.")
//         }
//         else{
//             reject("No, This is not a student");
//         }
//     }, 2000)
// })
// promise
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
// .finally(() => console.log("Finally block is always executed."));

// async / await
// setTimeout(() => {
//     function fetchUser(){
//         return Promise.resolve("Rohan Gupta");
//     }
//      async function showUser(){
//         let name = await fetchUser();
//         console.log(name);
//     }
//     showUser();
// }, 2000)

// Real use of Clouser
// function createTheme(theme){
//     return function changeTheme(){
//         console.log(`Theme changed to ${theme}`);
//     }
// }
// const darkTheme = createTheme(`Dark`);
// const lightTheme = createTheme(`Light`);
// darkTheme();
// lightTheme();

// console.log("---------------------------------------------------");
// Callback Hell
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

// Promise chaining
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let isStudent = true;
//         if(isStudent){
//             resolve("Yes, This is our collage student.");
//         }
//         else{
//             reject("No, This is not a student.");
//         }
//     }, 2000)
// })
// promise1
// .then((data) => {
//     console.log(data)
// })
// .catch((err) =>{
//     console.log(err)
// })
// .finally(() => {
//     console.log("Finally block is always executed.");
// });

// Async / Await
// async function fetchUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let isStudent = false;
//             if (isStudent) {
//                 resolve("Yes, This is our collage student.");
//             } else {
//                 reject("No, This is not a student.");
//             }
//         }, 2000);
//     });
// }

// async function showUser() {
//     try {
//         let result = await fetchUser();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("Finally block is always executed.");
//     }
// }
// showUser();


// Heigher Order Function with simple example
// function higherOrderFunction(callback) {
//     console.log("This is a higher order function.");
//     callback();
// }

// higherOrderFunction(() => {
//     console.log("This is a callback function.");
// });

// console.log("---------------------------------------------------");

// Heigher Order Function with Array methods
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const square = numbers.map((num) => num * num);
console.log(square);
// filter 
const evenNumbers = square.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// reduce2
const sum2 = evenNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);