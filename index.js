'use strict'

const AllcardPreloader = document.querySelectorAll('.card__preloader')

window.addEventListener('load', () => AllcardPreloader.forEach(item => item.classList.remove('card__preloader--visible')))

