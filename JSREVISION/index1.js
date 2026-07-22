

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
// function name() {
// console.log("Hello, this is a function declaration.");
// }
// name();

// function expression
// const greet = function() {
//     console.log("Hello, this is a function expression.");
// }
// greet();

// arrow function
// const add = (a, b) => {
//     return a + b;
// }
// const result = add(10, 60);
// console.log(result);
// const multiply = (x, y) => x * y;
// const result1 = multiply(5, 10);
// console.log(result1);

// Anonymous function
// setTimeout(function(){
//     console.log("Hey everyone rohan gupta this side and this is an anonymous function");
// },2000);


// function with default parameters
// const greetUser = (name = "Rohan Gupta") => {
//     console.log(`Hello, ${name}! welcome to the world of JavaScript.`)
// }
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
// function fun1(){
//     console.log("This is function one");
// }
// function fun2(){
//     console.log("This is function Two");
// }
// fun1(fun2);
// fun2(fun1);


// higher order function
// function calculate(a, b, operation){
//     return operation(a, b);
// }

// function add1(x, y){
//     return x + y;
// }

// let ans2 = calculate(45, 45, add1);
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

// function validPassword(password){
//     return password.length>=5;
// }
// let ans1 = validPassword(123456);
// console.log(ans1);


// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// let ans = reverseString("hello");
// console.log(ans);



// from here we are learn about Promise

// const promise = new Promise((resolve, reject) => {
//     resolve("Data received");
// });

// promise.then((data) => {
//     console.log(data);
// })

// const promise1 = new Promise((resolve, reject) => {
//     reject("Data not received")
// });
// promise1.catch((error) => {
//     console.log(error);
// })


// resolve and reject together
// const promise2 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("User login");
//     }
//     else{
//         reject("Something went wrong");
//     }
// })

// promise2.then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })


// for example login check

// function loginUser(){

//     return new Promise((resolve, reject) => {
//         let succes = true;
//         if(succes){
//             resolve("Welcome Shubham Kumar");
//         }
//         else{
//             reject("Invalid Credentials")
//         }
//     })
// }

// loginUser().then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.log(error);
// })


// using setTime
// function promise3(){
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             let isStudent = true;
//             if(isStudent){
//                 resolve("Yes is am student");
//             }
//             else{
//                 reject("No i am not a student");
//             }
//         }, 5000);
//     })
// }

// promise3()
//     .then(result => console.log("Resolved:", result))
//     .catch(error => console.log("Rejected:", error))
//     .finally(() => console.log("Process finished"));


// const promise4 = new Promise((resolve) => {
//     resolve(20);
// })
// promise4.then((data) => {
//     console.log(data);
//     return data * 2;
// }).then((data) => {
//     console.log(data);
//     return data + 40;
// }).then((data) => {
//     console.log(data);
// })


//from here we are learn async and await
// async function userData(){
//     return "Rohan Gupta";
// }
// userData().then((data) => {
//     console.log(data);
// }).catch(err => console.log(err));


// function isStudent(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Yes, you are a student");
//         },4000)
//     })
// }

// async function fetchData(){
//     let result = await isStudent();
//     console.log(result);
// }
// fetchData();

// setTimeout(() => {
//     function outer(){
//     let count = 0;
//     function inner(){
//         return count++;
//     }
//     return inner;
// }
// let counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// },4000)


// A classic case of Callback Hell
// getUserData(userId, (user) => {
//   getOrders(user.id, (orders) => {
//     getOrderDetails(orders[0].id, (details) => {
//       getShippingStatus(details.id, (status) => {
//         console.log(`Shipping status: ${status}`);
//         // Imagine trying to handle errors for each step here...
//       });
//     });
//   });
// });
// getUserData();


// async function displayShippingStatus(userId) {
//   try {
//     const user = await getUserData(userId);
//     const orders = await getOrders(user.id);
//     const details = await getOrderDetails(orders[0].id);
//     const status = await getShippingStatus(details.id);
    
//     console.log(`Shipping status: ${status}`);
//   } catch (error) {
//     // One single catch block handles errors for ANY of the steps above!
//     console.error("Something went wrong along the way:", error);
//   }
// }



// async function displayShippingStatus(userId) {
//   try {
//     if (!userId) throw new Error("User ID is required!");

//     const user = await getUserData(userId);
//     if (!user) throw new Error("User not found!");

//     const orders = await getOrders(user.id);
//     if (!orders || orders.length === 0) throw new Error("No orders found!");

//     const details = await getOrderDetails(orders[0].id);
//     if (!details) throw new Error("Order details not found!");

//     const status = await getShippingStatus(details.id);
//     console.log(`Shipping status: ${status}`);
//   } catch (error) {
//     console.error("Something went wrong:", error.message);
//   }
// }

// // Example call
// displayShippingStatus("12345");


// function sum(a, b){
//     let ans = a + b;
//     return ans;
// }
// let vv = sum(11, 11);
// console.log(vv);

// function sum(a, b){
//     return a+b;
// }
// let vv = sum(11,11);
// console.log(vv);


// console.log("1");

// const promise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("promise resolved");
//     }
//     else{
//         reject("promise reject");
//     }
// })
// promise.then((data) => console.log(data))
// .catch((error) => console.log(error))
// .finally((data) => console.log("Final always execute"));

// function print(){
//     setTimeout(() => {
//         console.log("SetTime out function");
//     }, 0)
// }
// print();

// console.log("4");


// let res = summ(10, 10);
// console.log(res);
// function summ(a,b){
//     return a + b;
// }
// summ(10, 10);


// const aa = print(11, 11);
// console.log(aa);
// const print = function(a, b){
//     return a+b;
// }


// clouser resivision 
// function outer() {
//     let count = 1;
//     function inner() {
//         return count++;
//     }
//     return inner;
// }
// const counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());



// call back function
// function fetchData(rohan){
//     setTimeout(() => {
//         const data = {
//             name: "Rohan Gupta",
//             age: 22,
//             city: "Mohali",
//             salary: 50000
//         }
//         rohan(data);
//     }, 2000)
// }

// function callData(data){
//     console.log(`hey Everyone my name is ${data.name} and i am ${data.age} years old. i am from ${data.city}, and my salary is ${data.salary}`);
// }

// fetchData(callData);


const person = {
    greet() {
        console.log("Hello!");
    }
};

const student = Object.create(person);

student.name = "Shubham";

// console.log(student.name); // Shubham
// student.greet();           // Hello!


const animal = {
    sound() {
        console.log("Animal makes sound");
    }
}

const dog = Object.create(animal);
// dog.sound();


function one(){
    console.log("One");
}

function two(){
    one();
    console.log("Two");
}

// two();


const f1 = function(){
    console.log("One 1");
}

const f2 = function(){
    // f1();
    console.log("Two 2");
}

// f2();
// f1();


// console.log("Start");
// setTimeout(() => {
//     console.log("Timer");
    
// }, 2000)

// Promise.resolve().then(() => {
//     console.log("Promise resolve");
// })

// console.log("emd");


// console.log("Hello");




// Parent constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name); 
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} the ${this.breed} barks!`);
};

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); 
dog1.bark(); 



// Simulated API call using Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log("Fetching user data...");

    setTimeout(() => {
      if (userId === 101) {
        resolve({
          id: 101,
          name: "Rohan",
          email: "rohan@example.com",
        });
      } else {
        reject(new Error("User not found!"));
      }
    }, 2000); // simulate network delay
  });
}


fetchUserData(101)
  .then((user) => {
    console.log("✅ User fetched successfully:", user);
    return user.email; // chaining: pass email forward
  })
  .then((email) => {
    console.log("📧 Sending welcome email to:", email);
  })
  .catch((error) => {
    console.error("❌ Error occurred:", error.message);
  })
  .finally(() => {
    console.log("This block always executed weither function is executed or not");
  });
