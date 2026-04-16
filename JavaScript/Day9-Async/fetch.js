let promise=fetch("https://jsonplaceholder.typicode.com/posts/1");

// promise.then((reponse)=>{
//     // console.log(reponse);
//     let promise2=reponse.json();
//     // console.log(promise2);
//     promise2.then((data)=>{
//         console.log(data);
        
//     })
// })


// fetch using await 

async function fetchData(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/posts");
        let data=await response.json();
        // console.log(data);
        data.forEach((obj)=>{
            console.log(`Title: ${obj.title}\nBody: ${obj.body}\n`);
        });
    }catch(err){
        console.log(err);
    }
}
fetchData();