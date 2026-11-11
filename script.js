packages=[
    {name:"Basic Landing Page", price:"10$", delivery:"3 Days", details:"simple plain website"},
    {name:"pro Landing Page", price:"40$", delivery:"6 Days", details:" Professional website"},
    {name:"Advanced Landing Page", price:"80$", delivery:"2/3week", details:"custom website"}
]

let index = 1;

const basic_btn=document.querySelector("#basic_btn");
const pro_btn=document.querySelector("#pro_btn");
const vip_btn=document.querySelector("#vip_btn");

const name_pkg=document.querySelector("#name");
const price_pkg=document.querySelector("#price");
const delivery_pkg=document.querySelector("#delivery");
const details_pkg=document.querySelector("#details");

function Offers(name, price, delivery, details){
    const current=packages[index];
    name_pkg.textContent=current.name;
    price_pkg.textContent=current.price;
    delivery_pkg.textContent=current.delivery;
    details_pkg.textContent=current.details;
}

basic_btn.addEventListener("click", () => {
    index=0;
    Offers();
});
pro_btn.addEventListener("click", () => {
    index=1;
    Offers();
});
vip_btn.addEventListener("click", () => {
    index=2;
    Offers();
});
Offers();