// ------------------------ ASYNCHRONOUS JAVASCRIPT -------------------


// -------------------- SET TIMEOUT -------------------
// SetTimeout is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It takes two parameters: a callback function and the delay in milliseconds. 
// When you call setTimeout, it schedules the callback function to be executed after the specified delay, allowing you to perform asynchronous operations without blocking the main thread.

// console.log("Start");
// setTimeout(()=>{
//     console.log("Inside setTimeout");
// },4000);
// console.log("End");


// ------------------- SET INTERVAL -------------------


// Set Interval is another built-in JavaScript function that allows you to execute a piece of code repeatedly at specified intervals. It takes two parameters: a callback function and the interval in milliseconds.
// When you call setInterval, it schedules the callback function to be executed repeatedly at the specified intervals until you clear it using clearInterval.

// Example of setInterval:
// console.log("Start");
// setInterval(()=>{
//     console.log("Inside setInterval");
// },2000);
// console.log("End");

// console.log("Timer Started ⌚")
// let count=0;
// setInterval(()=>{
//     count++;
//     console.log(`Timer is running:- (${count})`)
// },1000);


// TO Display Time and Date using setInterval
// setInterval(()=>{
//     let date=new Date();
//     let time=date.toLocaleTimeString();
//     let day=date.toLocaleDateString();
//     console.log(`Time:- ${time}  Date:- ${day}`);
// },1000);


// Clear Timeout and Clear Interval are functions that allow you to stop the execution of a scheduled setTimeout or setInterval, respectively.
// clearTimeout is used to cancel a timeout that was previously scheduled with setTimeout. It takes the timeout ID returned by setTimeout as an argument and prevents the callback function from being executed if it hasn't already been triggered.
// console.log("start");
// let id=setTimeout(()=>{
//     console.log("Inside setTimeout");
// },4000);
// clearTimeout(id);
// console.log("End");


// clearInterval is used to cancel an interval that was previously scheduled with setInterval. It takes the interval ID returned by setInterval as an argument and stops the repeated execution of the callback function.

console.log("Timer Started ⌚")
let count=0;
let id=setInterval(()=>{
    count++;
    console.log(`Timer is running:- (${count})`)
    if(count===5){
        clearInterval(id);
        console.log("Timer Stopped ⏹️")
    }
},1000);