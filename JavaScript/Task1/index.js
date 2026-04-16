async function getProducts(){
    try{

        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();

        // Take that container which is present inside the html using getElementById
        const container=document.getElementById("product_list");

        data.forEach((obj)=>{
            // console.log(obj.id+" "+obj.title+" "+obj.price);

            const div=document.createElement("div");

            div.innerHTML = `
                <h3>${obj.id} ---> ${obj.title}</h3>
                <p>Price: $${obj.price}</p>
                <hr/>
            `;

            container.appendChild(div);

        })

        // console.log(data);
    }catch(err){
        console.log(err);
    }
    
}
getProducts();

