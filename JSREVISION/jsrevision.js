// Variable revision
// var name = "JSRevision";
// console.log("Revision: " + name);

// let age = 22;
// console.log("Age: " + age);

// const country = "India";
// console.log("Country: " + country);

// scope of var, let and const
// var x = 10;
// if(true){
//     var y = 20;
//     console.log("y: " + y);
//     console.log("x: " + x);
// }
// console.log("y: " + y);

// let x = 10;
// if(true){
//     let y = 20;
//     console.log("y: " + y);
//     console.log("x: " + x);
// }
// console.log("y: " + y); // it give error -> y is not defined;
// console.log("x: " + x);

// const x = 10;
// if(true){
//     const y = 20;
//     console.log("y:", y);
//     console.log("X:", x);
// }
// // console.log("y:", y); // it give error -> y is not defined;
// console.log(x);


// Data type revision
/* 
Primitive datatype
Number -> 28, 764, 90.90, 87;
Boolean -> True and false
String -> "Rohan", "Shubham"
Null -> Intentional absence of value.
Bigint -> 35465767
undefined -> Declared but not assigned a value.
symbol -> Unique, immutable identifier (ES6).

Non-Primitive Data
Object -> soret the data in key value pair;
Array -> [1,2,3,4,5,6];
function ->  Reusable code of block.
*/

// Object 
// const users = {
//     name: "Shubham Kumar",
//     age: 22,
//     city: "Motihari",
//     isStudent: true
// }
// console.log(users.age);
// console.log(users);

let user = {
    name: "Rohan Gupta",
    age: 22,
    city: "Motihari",
    greet: function(){
        console.log(`Hey everyone i am ${this.name} and i am ${this.age} years old and i am from ${this.city}.`);
    }
}
user.greet();

// Array
// let nums = [22,31,55];
// const res = nums.map((nums) => nums * 2);
// const res2 = nums.filter((n) => {
//     if(n % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(res);
// console.log(res2);

// Function
// function greet(){
//     const name = "Shubham Kumar"
//     console.log("Rohan Gupta");
// }
// greet();
// const fun = function(){
//     console.log("Hey", greet());
    
// }
// fun();
// Type correction
// let name = "Rohan " + 22;
// console.log(name);

// const city = 8450 + " Motihari"
// console.log(city);

// let age = "25";
// let isAdult = Number(age) === 25;
// console.log(isAdult);
// console.log(age === 25);

// const num = 222;
// const rr = String(num);
// console.log(rr);
// console.log(typeof(rr));
// console.log(typeof(num));

