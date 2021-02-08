'use strict'

// Cuando hago CLICK en ".header__fas" a ".header__nav" toggle ".ver"

const icono = (document.querySelector('.header__fas') as HTMLElement)
const nav = (document.querySelector('.header__nav') as HTMLElement)

icono.addEventListener('click',() : void => {
    nav.classList.toggle('ver')
})