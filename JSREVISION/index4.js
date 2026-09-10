function step1(callback){
    setTimeout(() => {
        console.log("Pani ubal gaya hai");
        callback();
    }, 1000);
}

function step2(callback){
    setTimeout(() => {
        console.log("Chai patti dalo.");
        callback();
    }, 2000)
}

step1(() => {
    step2(() => {
        console.log("Chai ready hai aa ke le jao.");
    })
})