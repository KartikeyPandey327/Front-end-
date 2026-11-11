const client_name=document.querySelector("#client-name");
const hours_needed=document.querySelector("#hours-needed");
const quote_result=document.querySelector("#quote-result");
const quote_form =document.querySelector("#quote-form");
const user_name =document.querySelector("#user_name");

const rate = 50;

quote_form.addEventListener("submit",(event) => {
    event.preventDefault();
    const name=client_name.value;
    const hours=Number(hours_needed.value);
    if (name===""){
        user_name.textContent=`Please Enter Your Name:)`
        user_name.classList.remove("success")
        user_name.classList.add("error")
    }else if (hours<=0) {
        user_name.textContent=`Hours should be more than 0!!:)`
        user_name.classList.remove("success")
        user_name.classList.add("error")
    }else{
        const total= rate*hours;
        user_name.textContent=`Welcome ${name}`
        user_name.classList.remove("error")
        user_name.classList.add("success")
        quote_result.textContent=`Total = $${total}`
    }
    
    
    
    
    
    
    
    
});
