import './scss/style.scss'
const open = document.querySelector('.nav__btn__open')
const close = document.querySelector('.nav__btn__close')
const overlay = document.querySelector('.nav__overlay')
const mobileMenu = document.querySelector('.nav__cont')
const size = window.matchMedia('(width <69.3em)')
let status = open.getAttribute('aria-expanded')

const openMenu = () => {
    if (status) {
        mobileMenu.style.display = 'block'
        overlay.style.display = 'block '
        overlay.style.opacity = '0.75'
        open.setAttribute('aria-expanded', true)
        status = false

    }

}
const closeMenu = () => {
    if (status == false) {
        mobileMenu.style.display = 'none'
        overlay.style.display = 'none '
        overlay.style.opacity = '0'
        status = true
    }


}


const detect = (e) => {
    if (e.matches) {
        console.log('this is a mobile ')

    } else {
        console.log('this is a desktop ')


    }

}
open.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
size.addEventListener('change', (e) => { detect(e) })


