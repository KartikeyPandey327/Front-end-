const catalog = document.querySelector("#catalog");

async function testAPI() {

    const response = await fetch("https://dummyjson.com/products?limit=10");

    const data = await response.json();

    const budgetItems = data.products.filter((item) => item.price<30)

    budgetItems.forEach((item) => {
        const card = document.createElement("article");

        card.innerHTML=`
        <h1>${item.title}</h1>
        <h3>$${item.price}</h3>
        <img src="${item.thumbnail}" style="width: 80px;">.
        `
        catalog.append(card);
    });
}

testAPI();