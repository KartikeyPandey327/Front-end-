const product_form = document.querySelector("#product-form");
const title_input = document.querySelector("#title-input");
const price_input = document.querySelector("#price-input");
const submit_btn = document.querySelector("#submit-btn");
const status_msg = document.querySelector("#status-msg");


product_form.addEventListener("submit", async (event) => {
    event.preventDefault();
    submit_btn.textContent = "Uploading.....";

    const newProduct = {
    title: title_input.value,
    price: Number(price_input.value)
    };


    const response = await fetch("https://dummyjson.com/products/add", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    });
    const data = await response.json();
    if (response.ok){
        status_msg.innerHTML=`
        Added ${data.title} successfully with ID ${data.id}
        `
        submit_btn.textContent = "Upload to CLoud";
        title_input.value=" ";
        price_input.value=" ";
    }
    else{
        status_msg.textContent = "Error"
    }    

    
})
