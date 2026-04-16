
// Question-1

let arr=[
    { 
        name:"pavan",
        subject:"JavaScript",
        Id:101
    },
    {
        name:"sai",
        subject:"Python",
        Id:102
    }
]

arr.forEach((obj)=>{
    console.log(`Name: ${obj.name}, Subject: ${obj.subject}, Id: ${obj.Id}`);
})


// Question-2
let user="student";
let price=3000;
function discount(user){
    if(user==="student"){
        return 100;
    }else if(user==="employee"){
        return 500;
    }else{
        return 0;
    }
}
if(user==="student"){
    price = price -discount(user)
    price-=discount(user);
    console.log("Final price for the Student is: "+price)
}else if(user==="employee"){
    price-=discount(user);
    console.log("Final price for the Employee is: "+price)
}else{
    console.log("No Discount for the user");
}



// Question-3
let color="yellow";
if(color.toLowerCase()==="green"){
    console.log("You can GO......");
}else if(color.toLowerCase()==="yellow"){
    console.log("Be readyyyyy....");
}else if(color.toLowerCase()==="red"){
    console.log("Waitt until it will changed to yellow");
}else{
    console.log("Invalid color");
}

