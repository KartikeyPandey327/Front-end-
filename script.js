const page   = document.querySelector("#theme_btn");
const button = document.querySelector("#dark_btn");

button.addEventListener("click", () => {
    page.classList.toggle("dark");
});
