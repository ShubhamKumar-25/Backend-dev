
// Write a program to filter the users whose age is greater than 27 and store them in a new array.
const user = [
    {name: "Rohan Gupta", age: 22, city: "Mumbai"},
    {name: "Virat Kohli", age: 37, city: "Bangalore"},
    {name: "Rohit Sharma", age: 30, city: "Delhi"},
    {name: "Rishabh Pant", age: 25, city: "Chennai"},
    {name: "Hardik Pandya", age: 28, city: "Kolkata"},
    {name: "Jasprit Bumrah", age: 29, city: "Hyderabad"},
    {name: "Shikhar Dhawan", age: 35, city: "Pune"},
    {name: "KL Rahul", age: 26, city: "Jaipur"},
    {name: "Ravindra Jadeja", age: 32, city: "Ahmedabad"},
    {namw: "Yuzvendra Chahal", age: 24, city: "Lucknow"}
]
let result = [];
for(let i=0; i<user.length; i++){
    if(user[i].age > 27){
        result.push(user[i]);

    }
}
console.log(result);