const btn = document.querySelector(".menu__list-burger");

const menu = document.querySelector(".menu__list-item");


btn.addEventListener("click", function (){

btn.classList.toggle("active");
    menu.classList.toggle("show");
});

