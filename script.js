const search_input = document.querySelector("#search-input");// here is where the initilization happens 
const product_grid = document.querySelector("#product-grid");
const cart_count = document.querySelector("#cart-count");
const cart_total = document.querySelector("#cart-total");
const cart_items = document.querySelector("#cart-items");

let allProducts = [];// we create two container....
let cart = [];

function search_products(){ // search bar
    search_input.addEventListener("input", () => {
        let query = search_input.value.toLowerCase(); // first whatever user writes convert it into to lower case
        const filtered = allProducts.filter(item => {
            return item.title.toLowerCase().includes(query); // now that value gets cheacked 
        });
        displayProducts(filtered) // that products are now displayed
    })
}

function addToCart(product){ // step 3
   const existingItem = cart.find(item => item.id === product.id); // cheacked if the item which added to cart already exist in the cart or not... and .find() is a boolean... either true or false
    if (existingItem){
        existingItem.qty += 1; // if it exits in the cart .. qut will be increased by 1
    }else{
        cart.push({ // if not.. it will push inside the cart
        id: product.id,
        title: product.title,
        price: product.price,
        qty: 1
        })}
        renderCart();// creats a new funtion which we will write in step 4
    }

    function renderCart(){ // step 4 , where the cart will be rendered.. means displayed
        cart_items.innerHTML = ""; // cart should be updated every time 
        if (cart.length === 0 ){
            cart_count.textContent = "0";
            cart_total.textContent= "$0.00";
            cart_items.textContent = " Your Cart is Empty." ;
            return;       
        } 
        const totalCount = cart.reduce((acc, item) => acc + item.qty, 0); // reduce works just like forEach ... method 2
        cart_count.textContent = totalCount;

        const grandTotal = cart.reduce((acc, item) => { // method 1
            return acc + (item.price * item.qty);
        }, 0);

        cart_total.textContent = `$${grandTotal.toFixed(2)}`; // prints the grand total to 2 decimal points 

        cart.forEach((item, index) => {
            const row = document.createElement("div");
            row.innerHTML=`${item.title} (x${item.qty}) - $${(item.price * item.qty).toFixed(2)}` // this is what is getting printed on the page sir
        ;
        const remove = document.createElement("button"); // creates a remove button for each item 
        remove.textContent="REMOVE FROM CART";
        remove.addEventListener("click", () => { // what will happen after we click remove button 
            if (item.qty > 1){ // we used if else to delete the items in the cart one by one.. so it looks clean
                item.qty -= 1;
                renderCart();// re loading the updated cart.. is important
            }else{
                 cart.splice(index, 1); // it removes exactly 1 item from the group..
                renderCart();
            }
           
        });
        row.append(remove); // appending 
        cart_items.append(row);
    });
}

function displayProducts(items){ // Step 2
    product_grid.textContent=""; // removes any exisitng product from the grid 

    if (items.length === 0){ // like a safety net.....
        product_grid.textContent="No Products found";
        return;
    }
    items.forEach((item) => { //this was step of loop
        const card = document.createElement("article"); // creates an article in html
        // here we write... what will be written inside that created article 
        card.innerHTML=`
            <img src="${item.thumbnail}" alt="${item.title}"> 
            <h3>${item.title}</h3>
            <p>$${item.price.toFixed(2)}</p>
        `
        const button = document.createElement("button"); // created a button 
        button.textContent="Add to Cart";
        button.addEventListener("click", () => { // where we decide what will happen if we press the button
            addToCart(item);// created a new function and will work on step 3
        });
        card.append(button);  // mother.append(child)...child will be always inside the mother isnt it
        product_grid.append(card);

    });
}

async function fetchProducts(){ // making this funtion was the 1 step
    
    product_grid.textContent="Loading products from the cloud...."; // the loadind period.. when u load the website
    try{ // try and catch to check if the contents are fetched successfully
        const response = await fetch("https://dummyjson.com/products?limit=8") // grabbed 

        const data = await response.json(); // unpacked 

        allProducts = data.products; // all contents now inside the allproducts 
        displayProducts(allProducts); // we crate a new funtion .. on which we will work on step 2

    }catch{
        product_grid.textContent="Failed to load products. Please refresh."; // if it fails to load from cloud 

    }
}
search_products();
fetchProducts();