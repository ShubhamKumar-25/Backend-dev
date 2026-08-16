// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol


// console.log(typeof null);
// console.log(typeof NaN);

// console.log(5 == '5');
// console.log(5 === "5");


// // function dec
// greet();
// function greet(){
//     console.log("Rohan Gupta");
    
// }



// // Global scope
// let name = `Rohan Gupta is a developer`;
// function greet1(){
//     console.log(name);
// }
// greet1();



// // function scope
// function test(){
//     let age = 22;
//     console.log(age);
// }
// // console.log(age);
// test();

// // Block scope
// if(true){
//     let isDev = true;
//     console.log(isDev);
// }
// //console.log(isDev);


// // Function Declaration
// function add(a , b){
//     return a+b;
// }
// const res = add(10, 10);
// console.log(res);


// // Function expression
// const add1 = function(x, y){
//     return x + y;
// }
// const res1 = add1(20 , 20);
// console.log(res1);


// // Arrow Function
// const sum = (l, m) => {
//     return l * m;
// }
// const res3 = sum(11, 2);
// console.log(res3);

// const mul = k => k * k;
// console.log(mul(5));


// const user = {
//     userName: "Shubham",
//     greetwa: function(){
//         console.log(this.userName);
        
//     }
// }
// user.greetwa();

// const user2 = {
//     naam : "Rohan Gupta",
//     greet2: () => {
//         console.log(this.naam);
//     }
// }

// user2.greet2();


// const user = {
//     userName: "Shubham",
//     age: 22,
//     greet: function(){
//         console.log(this.userName);
//         console.log(this.age);
//     }
// }
// user.greet();

// function first(){
//     // console.log("Shubham Gupta");
//     second();
// }

// function second(){
//     console.log("Rohan gupta is software developer");
// }

// first();

// const name = "Rohan Gupta....";
// function aa(){
//     console.log(name);
// }
// aa();

const country = "India";
function outer(){
    const State = "Punjab";
    console.log(State);
    console.log(country);
    // console.log(city); isse hum outer function ke under access nahi kar sakte hai....
    function inner(){ // ye inner function sabhi ko access kar sakta hai.....
        let city = "Mohali";
        // console.log(country);
        // console.log(State);
        // console.log(city);
    }
    inner();
}
outer();