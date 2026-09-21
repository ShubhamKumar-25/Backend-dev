// function step1(callback){
//     setTimeout(() => {
//         console.log("Pani ubal gaya hai");
//         callback();
//     }, 1000);
// }

// function step2(callback){
//     setTimeout(() => {
//         console.log("Chai patti dalo.");
//         callback();
//     }, 1000)
// }

// step1(() => {
//     step2(() => {
//         console.log("Chai ready hai aa ke le jao.");
//     })
// })


// setTimeout(() => {
//     console.log("--------------------------------------");
// }, 2000);

// function delayTask(msg){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(msg);
//             resolve();
//         }, 2000)
//     })
// }

// delayTask("Oil hot ho gaya hai.")
//     .then(() => delayTask("Abb pakaudhe daalo."))
//     .then(() => delayTask("Abb paukade ko nikal do"));



// async function makeTea() {
//     await delayTask("Pani ubal gaya hai..");
//     await delayTask("Abb chai patti dalo..");
//     await delayTask("Chai ready hai..");
// }
// makeTea();