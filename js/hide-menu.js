// menu-open

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header-nav');
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-nav-active');
});