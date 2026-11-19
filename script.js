const search_input = document.querySelector("#search-input");
const product_grid = document.querySelector("#product-grid");
const cart_count = document.querySelector("#cart-count");
const cart_total = document.querySelector("#cart-total");
const cart_items = document.querySelector("#cart-items");

let allProducts = [];
let cart = [];

function addToCart(product){
   const existingItem = cart.find(item => item.id === product.id);
    if (existingItem){
        existingItem.qty += 1;
    }else{
        cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        qty: 1
        })}
        renderCart();
    }

    function renderCart(){
        cart_items.innerHTML = "";
        if (cart.length === 0 ){
            cart_count.textContent = "0";
            cart_total.textContent= "$0.00";
            cart_items.textContent = " Your Cart is Empty." ;
            return;       
        } 
        const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
        cart_count.textContent = totalCount;

        const grandTotal = cart.reduce((acc, item) => {
            return acc + (item.price * item.qty);
        }, 0);

        cart_total.textContent = `$${grandTotal.toFixed(2)}`;

        cart.forEach((item, index) => {
            const row = document.createElement("div");
            row.innerHTML=`${item.title} (x${item.qty}) - $${(item.price * item.qty).toFixed(2)}`
        ;
        const remove = document.createElement("button");
        remove.textContent="REMOVE FROM CART";
        remove.addEventListener("click", () => {
            cart.splice(index, 1);
            renderCart();
        });
        row.append(remove);
        cart_items.append(row);
    });
}

function displayProducts(items){
    product_grid.textContent="";

    if (items.length === 0){
        product_grid.textContent="No Products found";
        return;
    }
    items.forEach((item) => {
        const card = document.createElement("article");
        card.innerHTML=`
            <img src="${item.thumbnail}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>$${item.price.toFixed(2)}</p>
        `
        const button = document.createElement("button");
        button.textContent="Add to Cart";
        button.addEventListener("click", () => {
            addToCart(item);
        });
        card.append(button);
        product_grid.append(card);

    });
}

async function fetchProducts(){
    
    product_grid.textContent="Loading products from the cloud....";
    try{
        const response = await fetch("https://dummyjson.com/products?limit=8")

        const data = await response.json();

        allProducts = data.products;
        displayProducts(allProducts);

    }catch{
        product_grid.textContent="Failed to load products. Please refresh.";

    }
}
fetchProducts();