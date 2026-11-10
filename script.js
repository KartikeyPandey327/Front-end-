function getQuote(service, hours, rate){
    if(hours=== 0){
        return`No hours billied!!`;
    }
    let total=hours*rate;
    if (hours>=5){
        total=total*0.9
        
    }
    return `${service} for ${hours} hours will cost= $${total}`
}

let hours=1;
const rate=50;


const minus_btn = document.querySelector("#minus-btn");
const plus_btn = document.querySelector("#plus-btn");
const reset_btn = document.querySelector("#reset-btn");
const hours_display = document.querySelector("#hours-display");
const Submit_btn = document.querySelector("#Submit");
const Total = document.querySelector("#total");

minus_btn.addEventListener("click", () => {
    if(hours>1){
        hours=hours-1;
        hours_display.textContent= `${hours}`;
    }
} );
plus_btn.addEventListener("click", () => {
    hours=hours+1;
    hours_display.textContent= `${hours}`;
} );
reset_btn.addEventListener("click", () => {
    hours=1;
    hours_display.textContent= `${hours}`;
} );
Submit_btn.addEventListener("click", () => {
    Total.textContent = getQuote("Web Design", hours, rate);
} );


