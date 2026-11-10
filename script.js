reviews=[
    { name:"kartikey", role:"front end dev", city:"pune"},
    { name:"ishika", role:"back end dev", city:"nagpur"},
    { name:"bhende", role:"full stack dev", city:"hinganghat"}
]
let index=0;


const review_name=document.querySelector("#review-name");
const review_role=document.querySelector("#review-role");
const review_city=document.querySelector("#review-city");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");

function showReview(name, role, city){
    const current=reviews[index];
    review_name.textContent=current.name
    review_role.textContent=current.role
    review_city.textContent=current.city
}
prev.addEventListener("click", () => {
    if (index===0){
        index=2;
    }else{
        index=index-1;
    }
    showReview();
});
next.addEventListener("click", () => {
    if (index===2){
        index=0;
    }else{
        index=index+1;
    }
    showReview();
});
showReview();



