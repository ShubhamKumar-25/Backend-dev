
// console.log(banaaoChai('masala'));
// console.log(banaaoCoffee('cappuccino'));
function banaaoChai(type) {
    return `Making a cup of ${type} chai... Enjoy your drink!`;
}

const banaaoCoffee = function(type) {
    return `Making a cup of ${type} coffee... Enjoy your drink!`;
}

// Arrow functions and how they handle the this keyword differently.
const user = {
    name: "Rohan Gupta",

    sayHelloRegular: function(){
        console.log(`Hello, my name is ${this.name}`)
    },

    sayHellowArrow: () => {
        console.log(`Hello, my name is ${this.name}`)
    }
}

user.sayHelloRegular(); 
user.sayHellowArrow();