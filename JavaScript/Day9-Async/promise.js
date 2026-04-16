// console.log("Order Placed 😋");
// let swiggy = new Promise((resolve, reject)=>{
//   let isFoodAvailable = false;
//   setTimeout(()=>{
//     if(isFoodAvailable){
//       resolve("Food Delivered...😃");
//     }else{
//       reject("Item Not Available...🥲");
//     }
//   }, 5000);
// });

// // handling promise object
// swiggy.then((value)=>{
//   console.log(value);
// })
// .catch((reason)=>{
//   console.log(reason);
// })

// console.log("Doing other works");





// console.log("Order Placed 😋");
// let swiggy = new Promise((resolve, reject)=>{
//   let isFoodAvailable = true;
//   setTimeout(()=>{
//     if(isFoodAvailable){
//       resolve({
//         name:"Pizza",
//         price:500,
//         quantity:1
//       });
//     }else{
//       reject("Item Not Available...🥲");
//     }
//   }, 5000);
// });

// handling promise object
// swiggy.then((value)=>{
//   console.log(`Food Delivered...😃\nName: ${value.name}\nPrice: ${value.price}\nQuantity: ${value.quantity}`);
// })
// .catch((reason)=>{
//   console.log(reason);
// })

// console.log("Doing other works");

// We can also use async/await to handle promises in a more synchronous manner. Here's how you can do it:

// async function orderFood(){
//     try {
//         let value = await swiggy;
//         console.log(`Food Delivered...😃\nName: ${value.name}\nPrice: ${value.price}\nQuantity: ${value.quantity}`);
//     } catch (reason) {
//         console.log(reason);
//     }   
// }

// orderFood();
// console.log("Doing other works");



// JSON and Stringify
// let obj={
//     name:"Pavan",
//     age:22,
//     city:"Hyderabad"
// }   
// let jsonString=JSON.stringify(obj);
// console.log(jsonString);
// console.log(typeof jsonString);

// JSON and Parse
// let jsonString2='{"name":"Sai","age":25,"city":"Bangalore"}';
// let obj2=JSON.parse(jsonString2);
// console.log(obj2);
// console.log(typeof obj2);



