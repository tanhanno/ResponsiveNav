const burger = document.querySelector(".burger");
const navmenu = document.querySelector(".navmenu");

burger.addEventListener("click", mobilemenu);

function mobilemenu() {
    burger.classList.toggle("active");
    navmenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navlink");

navLink.forEach(n => n.addEventListener("click", closemenu));

function closemenu() {
    burger.classList.remove("active");
    navmenu.classList.remove("active");
}