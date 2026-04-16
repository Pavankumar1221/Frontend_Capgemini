// let price:number=100;
// price="Hello"; // Error
// console.log(price);


// let name1:string="Pavan";
// console.log(name1);

// let isStudent:boolean;
// isStudent="YES"; //Wrong
// isStudent=true;
// console.log(isStudent);



// let address:undefined;
// address="Bla Blaaa....";
// address=undefined;
// console.log(address);


// let salary:null;
// salary=null;
// console.log(salary);


// let user1:Symbol;
// user1=Symbol("Pavan");
// console.log(user1);


// let num1:bigint;
// num1=30n;
// let num2:bigint;
// num2=40n;
// let num3:number;
// num3=30;
// console.log(num1+num2);
// console.log(num1+num2);
// console.log(num1+num3); // Error cause of diff datatype


// let details:{name:string, age:number, address:{city:string}}={
//     name:"Pavan",
//     age:21,
//     address:{
//         city:"SKLM",
//     }
// }
// console.log(details);

// function student(std1:string, roll:number){
//     console.log(std1);
//     console.log(roll);
// }

// student("Pavan",121);



// let a:any;
// a="Pavan";
// console.log(a);
// a=123456;
// console.log(a);
// a=true;
// console.log(a);

// Tuple-- fixed order
// let details:[name:string, age:number, isEmployed:boolean]=['Pavan',21,true];
// console.log(details);

// let astatus:"Success" | "Failure";
// astatus="Success";
// console.log(astatus);


// function sayHello():void{
//     console.log("hello");
//     // return "hello"; //Error
// }
// sayHello();

// let message:unknown;
// message="Hello";
// message=45;
// if(typeof message === "string"){
//     console.log(message.toUpperCase());
// }else{
//     console.log(message);
// }

// let a=(collage:string, isCollageGood:boolean):string=>{
//     console.log("Name of the Collage: "+collage);
//     console.log("Is Collage Good: "+isCollageGood);
//     return "done";
// }
// a("LPU",true);



// function chichat(...rest:(number|string)[]){
//     console.log(rest);
    
// }
// chichat(101,102,"Pavan");


interface user{
    name:string,
    age:number
}

let user1:user={
    name:"Pavan",
    age:21,
}
user1.name="Pavan Kumar";
console.log(user1);

let user2:user={
    name:"Raj",
    age:26,
}
console.log(user2);
