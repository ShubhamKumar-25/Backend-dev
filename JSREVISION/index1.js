

const user = {
    name: "Rohan Gupta",
    age: 22,
    city: "Bihar",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}.`)
    }
}

// user.greet();
// user.city = "New Delhi";
// user.greet();
// for(let key in user){
//     console.log(`${key}: ${user[key]}`);
// }
// for(let data in user){
//     console.log(data);
// }

