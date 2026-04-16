async function getProducts(){
  let fakeSource = await fetch("https://fakestoreapi.com/products");
  let data = await fakeSource.json();
  let container = document.getElementById("container");
  data.forEach((ele) => {
    let div = document.createElement("div");
    div.className = "subcontainer";
    div.innerHTML = `
      <img src="${ele.image}">
      <p><b>${ele.category}</b></p>
      <p class="price">₹ Price: Rs ${ele.price}</p>
      <p class="rating">Rating: ${ele.rating.rate}</p>
      <button class="button">Add to Cart</button>`;
      
    container.append(div);
  });
}
getProducts();