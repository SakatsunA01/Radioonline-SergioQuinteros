const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("navbar-menu_visible")
})

// const btn = document.querySelector(".btn");
// const dropdownMenu = document.querySelector(".dropdown_menu");

// btn.addEventListener("click", () => {
//     dropdownMenu.classList.toggle("dropdown_menu_hide")
// })
const btn = document.querySelector(".btn");
var dropdownMenu = document.querySelector(".dropdown_menu");

let buttons = document.querySelectorAll(".btn");
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        dropdownMenu.classList.toggle("dropdown_menu_hide")

    })
}