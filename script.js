const author_text = document.querySelector("#author-text");
const quote_text = document.querySelector("#quote-text");
const get_quote_btn = document.querySelector("#get-quote-btn");

async function fetchQuote() {
    get_quote_btn.textContent = "Loading..."; // 1. Tell user we are fetching!
  
    const responce = await fetch("https://dummyjson.com/quotes/random");

    const data = await responce.json();
    quote_text.textContent = `${data.quote}`
    author_text.textContent = `${data.author}`
    
    get_quote_btn.textContent = "Get New Quote"; // 2. Reset button text!
}

get_quote_btn.addEventListener("click", () => {
    fetchQuote();
})

