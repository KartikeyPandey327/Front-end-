const cart_box = document.querySelector("#cart-box");
const cart_count = document.querySelector("#cart-count");
const cart_total = document.querySelector("#cart-total");
const cart_list = document.querySelector("#cart-list");
const cart_catalog = document.querySelector("#cart-catalog");


let cart = [];

function renderCart(){
    cart_list.innerHTML="";

    let total = 0;

    cart.forEach((cartItem, index) => {
        const remove_btn = document.createElement("button");
        remove_btn.textContent = "Remove";

        remove_btn.addEventListener("click", () => {
            cart.splice(index, 1);
            renderCart();
        });
        total = total + cartItem.price;

        const list = document.createElement("li");
        list.textContent=`${cartItem.title} - $${cartItem.price}`
        list.append(remove_btn);
        cart_list.append(list);
        

    });
    cart_count.textContent=`${cart.length}`
    cart_total.textContent=`${total.toFixed(2)}`

    localStorage.setItem("myCart", JSON.stringify(cart));

    
}

async function getProducts(){
    const response = await fetch("https://dummyjson.com/products?limit=8");

    const data = await response.json();

    data.products.forEach((item) => {
        const addBtn = document.createElement("button");
        addBtn.textContent = "Add to Cart";
        addBtn.addEventListener("click", () => {
            console.log("Added:", item.title);
            cart.push(item);
            renderCart();

        });

        
        const card = document.createElement("article");
        card.innerHTML=`
            <h1>${item.title}</h1>
            <h2>$${item.price}</h2>
            <img src="${item.thumbnail}" style="width: 100px;">
        `
        card.append(addBtn);
        cart_catalog.append(card)
    } );
}
const saved_cart = localStorage.getItem("myCart");
    if (saved_cart !== null){
        cart = JSON.parse(saved_cart);
        renderCart();
    }
getProducts();

