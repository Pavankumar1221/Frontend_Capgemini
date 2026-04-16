// let obj={
//     name:"John",
//     age:30,
//     city:"New York"
// };
// console.log(obj.name);
// console.log(obj["age"]);

// obj.age=31;
// console.log(obj.age);


let details={
    name:"pavan",
    age:25,
    city:"Hyderabad",
    hobbies:["coding","gaming","traveling"],
    greet:function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    family:{
        father:"Ravi",
        mother:"Sita",
        sister:"Anu"
    }
}


// console.log(details.name);
// console.log(details.hobbies[0]);
// details.greet();
// console.log(details.family.father);


// delete details.age;
// console.log(details.age); //undefined


let training={
    course:"Java Full Stack",
    year: "final year",
    details:{
        technologies:["HTML","CSS","JavaScript","React","Node.js"],
        duration:"6 months",
        salarydetails:{
            min:5000,
            max:10000
        }
    }
}


// seal and freeze
// Object.freeze(training.details);
// training.course="Python Full Stack";
// training.details.duration="3 months";
// training.details.salarydetails.min=3000;
// console.log(training);



// Array Destructing 
// let fruits=["apple","banana","orange"]; 
// let [fruit1,fruit2,fruit3]=fruits;
// console.log(fruit1);


// let names=["pavan","sai","kumar",["john","doe"]];
// let [name1,name2,name3,[fname,lname]]=names;
// console.log(name1);
// console.log(fname);


// Object Destructing
// let person={
//     name:"pavan",
//     age:25,
//     city:"Hyderabad"
// };
// let {name,age,city}=person;
// console.log(name);
// console.log(age);
// console.log(city);

// Nested Object Destructing
let person={
    name:"pavan",
    age:25,
    city:"Hyderabad",
    family:{
        father:"Ravi",  
        mother:"Sita",
        sister:"Anu"
    }
};
let {name,age,city,family:{father,mother,sister}}=person;
console.log(name);
console.log(father);