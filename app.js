const btn = document.querySelector(".page-nav-burger");

const menu = document.querySelector(".page-nav-list");

console.log(btn, menu);

btn.addEventListener("click", function (){



    menu.classList.toggle("show");
});