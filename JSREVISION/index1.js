

const user = {
    name: "Rohan Gupta",
    age: 22,
    city: "Bihar",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}.`)
    }
}

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


const newUser = {
    name: "Shubham Kumar",
    age: 22,
    email: "shubham@example.com",
    address: {
        street: "123 Main St",
        city: "Patna",
        state: "Bihar",
        zip: "800002"
    },
    hobbies: ["reading", "traveling", "coding"],
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. You can reach me at ${this.email}.`);
    }
}

for(let key in newUser){
    if(typeof newUser[key] === 'object' && !Array.isArray(newUser[key])){
        console.log(`${key}:`);
        for(let subKey in newUser[key]){
            console.log(`  ${subKey}: ${newUser[key][subKey]}`);
        }
    }
}