const btn = document.querySelector(".menu__list-burger");

const menu = document.querySelector(".menu__list-item");

console.log(btn, menu);

btn.addEventListener("click", function (){



    menu.classList.toggle("show");
});