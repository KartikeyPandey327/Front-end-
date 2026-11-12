const body_theme=document.querySelector(".theme");
const theme_btn=document.querySelector(".theme_btn")

let index=2;

theme_btn.addEventListener("click", () => {
    body_theme.classList.toggle("dark");
    if (index%2==0){
        theme_btn.textContent=`Light mode`
        index=index+1
    }else{
        theme_btn.textContent=`Dark mode`
        index=index+1
    }
    
});

const card_1=document.querySelector("#card1");
const card_2=document.querySelector("#card2");
const card_3=document.querySelector("#card3");
const card=document.querySelector(".card")
const Basic_btn=document.querySelector(".Basic-btn");
const pro_btn=document.querySelector(".Pro-btn");
const vip_btn=document.querySelector(".VIP-btn");

function clearSelection() {
  card_1.classList.remove("select");
  card_2.classList.remove("select");
  card_3.classList.remove("select");
}

Basic_btn.addEventListener("click", () => {
    clearSelection();
    card_1.classList.add("select");
});

pro_btn.addEventListener("click", () => {
    clearSelection();
    card_2.classList.add("select");
});
vip_btn.addEventListener("click", () => {
    clearSelection();
    card_3.classList.add("select");
});

const prev_btn=document.querySelector("#prev-btn");
const next_btn=document.querySelector("#next-btn");
const review_quote=document.querySelector("#review-quote");
const review_name=document.querySelector("#review-name");
const review_info=document.querySelector("#review-info");

const reviews = [ 
    {quote:"kk", name:"Kartikey", info:"pandey"},
    {quote:"iii", name:"unknow", info:"lets goo"},
    {quote:"oo", name:"oggy", info:"olivia"}
 ];

 let reviewIndex=0;

next_btn.addEventListener("click", () =>{
    if(reviewIndex===2){
        reviewIndex=0;
    }else{
        reviewIndex=reviewIndex+1;
    }
    const current=reviews[reviewIndex];
    review_quote.textContent=current.quote;
    review_name.textContent=current.name;
    review_info.textContent=current.info;
});
prev_btn.addEventListener("click", () =>{
    if(reviewIndex===0){
        reviewIndex=2;
    }else{
        reviewIndex=reviewIndex-1;
    }
    const current=reviews[reviewIndex];
    review_quote.textContent=current.quote;
    review_name.textContent=current.name;
    review_info.textContent=current.info;
});




