// console.log("javascript");
// console.log("Start");

// while(true){}

// console.log("End");
// const package;
// package=25;
// console.log(package);
// var emp = 500;
// let company = "tst";
// const role = "react dev";

// console.log(emp);
// console.log(namee);
// console.log(role);
// console.log("role");

// console.log(a);
// var a=10;
// console.log(a);

// console.log(b);
// let b=20;
// console.log(b);
//let and const throw reference error.


// console.log("hello");
// var b="h";
// // console.log(h);
// console.log(cu);
// var cu="hi";

//
//data types
// let contact = 8787878787;
// console.log("Contact Number is: ", contact);

// var price = 399;
// console.log("Price of the product is: ", price);

// const company = "Cognizant";
// console.log("Palak selected for", company, "👍");

// let salary = "4Lpa";
// console.log("Salary package is: ", salary);

// let isitGoodCompany = true;
// console.log("Is it company good ??", isitGoodCompany);

// var isTestyantraGoodCompany = false;
// console.log("Is Testyantra Good Company", isTestyantraGoodCompany);

// let salaryy = undefined;
// console.log("Testyantra salary is:", salaryy);

// let InstagramId = undefined;
// console.log("Himani instagram acc is", InstagramId);

// let productId=null;
// console.log(productId);

// var joiningDate=null;
// console.log(joiningDate);

// let transactionId=248346287683275487542n;
// console.log("your transactionId is: ",transactionId);
// console.log(typeof transactionId);

// let spaceCount=BigInt(58236548768735287354835328);
// console.log(spaceCount);
// console.log(typeof spaceCount);

// let price=400;
// var quantity=10n;
// console.log(price+quantity);



// let a=10;
// let b="1";
// console.log(a-b);

//functions
// function lunchbreak(){
//   console.log("students are waiting for break");
  
// }
// lunchbreak();

// function coffeeMachine(customer, typeoftea = "Hot Tea") {
//     console.log("Type of Tea:", typeoftea);
//     console.log("Boil the water");
//     console.log("Add Tea powder");
//     console.log("Add Milk");
//     console.log("Add sugar");
//     console.log("Served for", customer);
// }
// coffeeMachine("Shrivastava", "Cold Tea");
// coffeeMachine("Samreen", "Cold Tea");
// coffeeMachine("Kittu");

// function details(university,student,cgpa){
//   console.log("university: ",university);
//   console.log("student name: ",student);
//   console.log("cgpa: ",cgpa);
// }
// details("lpu","madhav",9);


//return
// function returnEx(num1,num2){
//   console.log("hello return");
//   return num1+num2;
//   console.log("this is unreachable");
  
// }
// let result=returnEx(5,6);
// console.log(result);

// function f1(){
//   console.log("return");
//   return ;
  
// }
// let a=f1();
// console.log(a);
// //without return and try to store it in variable it shows nothinf
// function f2(){
//   console.log("return");
  
// }
// let b=f2();
// console.log(b);

//anonymous
// let af=function(){
//   console.log("this is anonymus");
  
// }
// af();

// //expression
// //used for anonymous,named,arrow
// let fun=function ex(){
//   console.log("this is expression function");
  
// }
// fun();


//scenario 1
// let a=()=>
//   "hi"
// let b=a();
// console.log(b);

// let a=()=>
//   "hi"
// console.log(a());

//higher order and call back
// function madhav(){
//   console.log("he is earning 50k per minute");
  
// }
// function lpu(){
//   console.log("this is higher order function");
//   madhav();
  
// }
// lpu();

//10th april
//scope global can acess anywhere
//function varibles can acess with in the function only
//block level only var is acesssed out side of block(not let.,const)
// var a=10;
// let b=20;
// const c=30;

// console.log(a);
// console.log(b);
// console.log(c);

// function scope(){
//   console.log(a);
//   console.log(b);
//   console.log(c);
  
// }
// scope();
// if(true){
//   console.log(a);
//   console.log(b);
//   console.log(c);

// }

///////////////////////////////////////////////////////////////////////////////////////////////////////
// function getNotification(){
//     console.log("Hey!! i reached home Safely...😊");
    
// }

// function travelling(message){
//  console.log("Going to home....🚘");
//  message()
 
// }
// travelling(getNotification)




// function f1(){
//     console.log("This is higher order function i am going to return f2 function");
//   return function f2(){
//     console.log("This is returned function");
//    }
// }
// let a=f1()
// // console.log(a);
// a()



// function outer(){
//     let like=10;
//      function inner(){
//             console.log("Your likes count: ",like);
//      }
//      inner()
// }
// outer()





// function movieplan(){
//     console.log("Planning for movie");

//      function bookTicket(){
//         console.log("Booked ticket");
         
//      }
//      bookTicket()

//      function buyPopCorn(){
//         console.log("Buying pop corn..🍿");
//      }
//      buyPopCorn()

//      function enjoy(){
//          console.log("Enjoying Movie...🎥");
//      }
//      enjoy()

// }
// movieplan()



// var a=10;
// let b=20;
// const c=30;


// console.log(a);
// console.log(b);
// console.log(c);



// function f1(){
//    console.log(a);
//    console.log(b);
//    console.log(c);  
// }
// f1()



// if(true){
// console.log(a);
// console.log(b);
// console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);





// function f1(){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);   
// }
// f1()
//   console.log(a);
//     console.log(b);
//     console.log(c); 


// if(true){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//  console.log(a);
//     console.log(b);
//     console.log(c);



