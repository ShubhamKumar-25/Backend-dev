

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