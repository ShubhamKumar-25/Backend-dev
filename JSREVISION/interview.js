
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
function outer(){
    let count = 1;
    return function inner(){
        return count++;
    }
}
let counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
