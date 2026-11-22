
// // console.log(banaaoChai('masala'));
// // console.log(banaaoCoffee('cappuccino'));
// function banaaoChai(type) {
//     return `Making a cup of ${type} chai... Enjoy your drink!`;
// }

// const banaaoCoffee = function(type) {
//     return `Making a cup of ${type} coffee... Enjoy your drink!`;
// }

// // Arrow functions and how they handle the this keyword differently.
// const user = {
//     name: "Rohan Gupta",

//     sayHelloRegular: function(){
//         console.log(`Hello, my name is ${this.name}`)
//     },

//     sayHellowArrow: () => {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// user.sayHelloRegular(); 
// user.sayHellowArrow();


class Gaadi {
    constructor(naam, rang) {
        this.naam = naam;
        this.rang = rang;
    }
    start() {
        return `${this.naam} (${this.rang}) start ho gayi hai! 🚗`;
    }
}
const meriCar = new Gaadi("Honda City", "Black");
console.log(meriCar.naam);    // Output: Honda City
console.log(meriCar.start()); // Output: Honda City (Black) start ho gayi hai! 🚗

// Parent Class (Superclass)
class Gaadi {
    constructor(naam) {
        this.naam = naam;
    }

    chalo() {
        return `${this.naam} chal rahi hai...`;
    }
}

class ElectricScooter extends Gaadi {
    constructor(naam, batteryLife) {
        super(naam);
        this.batteryLife = batteryLife;
    }
    chargeKaro() {
        return `${this.naam} charge ho rahi hai. Battery: ${this.batteryLife}%`;
    }
}
ketanScooter = new ElectricScooter("Ather", 85);
console.log(ketanScooter.chalo());
console.log(ketanScooter.chargeKaro()); 