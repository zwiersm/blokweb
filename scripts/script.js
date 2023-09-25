// JavaScript Document
console.log("hi");

var menuButton = document.querySelector('.menu');
var kruisje = document.querySelector ('.closemenu');
var heleNav = document.querySelector('nav');

heleNav.classList.add('hidden');

function openMenu() {
    heleNav.classList.remove('hidden');
    menuButton.classList.add('hidden')
}

function closeMenu() {
    heleNav.classList.add('hidden');
    menuButton.classList.remove('hidden')
}

menuButton.addEventListener("click", openMenu);

kruisje.addEventListener("click", closeMenu);