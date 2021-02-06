'use strict';
// Cuando hago CLICK en ".header__fas" a ".header__nav" toggle ".ver"
var icono = document.querySelector('.header__fas');
var nav = document.querySelector('.header__nav');
icono.addEventListener('click', function () {
    nav.classList.toggle('ver');
});
