const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-toggle");

menuBtn.addEventListener('click', (e) => {
    menu.classList.toggle("header-open__visible");
});
