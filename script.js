const pop_up = document.querySelector("#popup")
const open_pop = document.querySelector("#open-btn")
const close_pop = document.querySelector("#close-btn")

open_pop.addEventListener("click", () => { pop_up.classList.add("show")

})
close_pop.addEventListener("click", () => { pop_up.classList.remove("show")

})