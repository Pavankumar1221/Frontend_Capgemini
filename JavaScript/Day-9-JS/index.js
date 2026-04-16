// let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// days.forEach((day,index)=>{
//     console.log(`${index+1} : ${day}`);
// });

// let val=days.forEach((day,index)=>{
//     console.log(`${index+1} : ${day}`);
// });
// console.log(val); //undefined.


// Map
// let numbers=[1,2,3,4,5];
// let squares=numbers.map((num)=>{
//     return num*num;
// });
// console.log(squares);

// let prices=[100,200,300,400,500];
// let finalPrices=prices.map((price)=>{
//     return price*1.1;
// });
// console.log(prices);
// console.log(finalPrices);


// Filter
// let age=[12,17,18,20,25,30];
// let adults=age.filter((a)=>{
//     return a>=18;
// });
// console.log(adults);


// Reduce
let numbers=[1,2,3,4,5];
let sum=numbers.reduce((accumulator,current)=>{
    return accumulator+current;
},10);  // we are giving 10 as initial value to accumulator, so the sum will be 10+1+2+3+4+5=25
console.log(sum);