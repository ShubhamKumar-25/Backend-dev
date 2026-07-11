

// const user = {
//     name: "Rohan Gupta",
//     age: 22,
//     city: "Bihar",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}.`)
//     }
// }

// console.log(user.name);
// console.log(user["age"]);
// console.log("name" in user);
// console.log('salary' in user);
// console.log(user.hasOwnProperty('city'));
// console.log(delete user.age);
// user.greet();
// user.city = "New Delhi";
// user.greet();
// for(let key in user){
//     console.log(`${key}: ${user[key]}`);
// }
// for(let data in user){
//     console.log(data);
// }
// for(let key in user){
//     console.log(key, user[key]);
// }


// const newUser = {
//     name: "Shubham Kumar",
//     age: 22,
//     email: "shubham@example.com",
//     address: {
//         street: "123 Main St",
//         city: "Patna",
//         state: "Bihar",
//         zip: "800002"
//     },
//     hobbies: ["reading", "traveling", "coding"],
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. You can reach me at ${this.email}.`);
//     }
// }

// for(let key in newUser){
//     if(typeof newUser[key] === 'object' && !Array.isArray(newUser[key])){
//         console.log(`${key}:`);
//         for(let subKey in newUser[key]){
//             console.log(`  ${subKey}: ${newUser[key][subKey]}`);
//         }
//     }
// }



// from here we are revise array in javascript

// const num = [1, 2, 3, 4, 5, 6];
// const ans2 = num.filter((val) => {
//     if(val % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans2);

// console.log("-------------------------------------------------------------")
// const ans3 = num.filter((n) => {
//     if(n % 2 !== 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans3);
// console.log(num);
// for(let i=0; i<num.length; i++){
//     console.log(num[i]);
// }

// const ans = num.map((val) => {
//     return val * val;
// })
// console.log(ans);

// const ans1 = num.map((val1) => val1 + 10);
// console.log(ans1);


// const arr = ["apple", "banana", "orange", "grape", "kiwi", "mango"];
// console.log(arr);
// // for(let val of arr){
// //     console.log(val);
// // }

// arr.push("watermelon");
// console.log(arr);
// arr.push("pineapple");
// console.log(arr);
// arr.pop();
// console.log(arr);


// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// arr2.unshift(10);
// console.log(arr2);
// arr2.shift();
// console.log(arr2);
// arr2.pop();
// console.log(arr2);
// arr2.splice(2, 0, 100);
// console.log(arr2);

// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
// const slicedArr = arr3.slice(2, 6);
// console.log(slicedArr);
// arr3.splice(2, 3, 100, 200);
// console.log(arr3);

// const arr4 = [29, 10, 3, 98, 5, 11, 5, 3];
// arr4.sort((a, b) => a - b);
// console.log(arr4);

// arr4.sort((a, b) => b - a);
// console.log(arr4);



// from here we revising of function in javascript
// function decelaration
function name() {
console.log("Hello, this is a function declaration.");
}
// name();

// function expression
const greet = function() {
    console.log("Hello, this is a function expression.");
}
// greet();

// arrow function
const add = (a, b) => {
    return a + b;
}
const result = add(10, 60);
// console.log(result);
const multiply = (x, y) => x * y;
const result1 = multiply(5, 10);
// console.log(result1);

// Anonymous function
// setTimeout(function(){
//     console.log("Hey everyone rohan gupta this side and this is an anonymous function");
// },2000);


// function with default parameters
const greetUser = (name = "Rohan Gupta") => {
    console.log(`Hello, ${name}! welcome to the world of JavaScript.`)
}
// greetUser();

// javascript execution context and call stack
// function first(){
//     console.log("This is the first function.");
// }
// first();

// function second(){
//     setTimeout(() => {
//         console.log("This is the second function.");
//     }, 5000);
// }
// second();

// const promise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise resolved successfully.");
//     }
//     else{
//         reject("Promise rejected.");
//     };
// });
// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });


// function third(){
//     console.log("This is the third function.");
// }
// third();


// console.log("--------------------------------------------------------------");

// // callback function
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = {
//             name: "Rohan Gupta",
//             age: 22,
//             salary: 50000
//         };
//         callback(data);
//     }, 3000);
// }

// function processData(data) {
//     console.log(`Name: ${data.name}, Age: ${data.age}, Salary: ${data.salary}`);
// }

// fetchData(processData);


// another call back function
function fun1(){
    console.log("This is function one");
}
function fun2(){
    console.log("This is function Two");
}
// fun1(fun2);
// fun2(fun1);


// higher order function
function calculate(a, b, operation){
    return operation(a, b);
}

function add1(x, y){
    return x + y;
}

let ans2 = calculate(45, 45, add1);
// console.log(ans2);


// IIFE 
// (function () {
//     console.log('Hey this is IIFE function ');
    
// })();




// function f1(){
//     console.log("1");
// }
// f1();

// function f2(){
//     setTimeout(() => {
//         console.log("2");
//     }, 0)
// }
// f2();

// const promise = new Promise((resolve, reject) => {
//     let success = true;

//     if(success){
//         resolve("Our promise is resolve successfully");
//     }
//     else{
//         reject("Our promise is rejected");
//     }
// })
// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// function f3(){
//     console.log("3")
// }
// f3();


// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         return count;
//     }
//     return inner;
// }
// let counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());



// function createAccount(name, balance){
//     let pin = "1234";
    
//     return {
//         getData: function(inputPin){
//             if(inputPin == pin){
//                 return `Name: ${name}, balance: ${balance}`;
//             }
//             else{
//                 return `access denied!!`
//             }
//         },

//         deposite: function(amount, inputPin){
//             if(inputPin == pin){
//                 balance += amount;
//                 return `New balance ${balance}`;
//             }
//             else{
//                 return `Wrong pin.....`
//             }
//         }
//     };
// }

// let print = createAccount("Rohan Gupta", 60000);
// // console.log(print.getData("1234"));
// // console.log(print.getData("1235"));
// console.log(print.deposite(3000, "1234"));
// console.log(print.deposite(9000, "1234"));



// test('passwaord should be at least 8 chacter', () => {
//   expect(ValidPassword("qede")).toBe(false);
// })

function validPassword(password){
    return password.length>=5;
}
let ans1 = validPassword(123456);
console.log(ans1);


function reverseString(str){
    return str.split('').reverse().join('');
}
let ans = reverseString("hello");
console.log(ans);



