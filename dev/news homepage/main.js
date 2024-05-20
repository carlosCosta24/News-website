import './scss/style.scss'
const body = document.querySelector('body')
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
        body.style.overflowY = 'hidden'
        status = false

    }

}
const closeMenu = () => {
    if (!status) {
        mobileMenu.style.display = 'none'
        overlay.style.display = 'none '
        overlay.style.opacity = '0'
        open.setAttribute('aria-expanded', false)
        body.style.overflowY = 'scroll'
        status = true
    }


}


const detect = (e) => {
    if (e.matches) {
        setTimeout(() => {
            mobileMenu.style.display = 'block'

        }, 500)

    } else {

    }

}
open.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
size.addEventListener('change', (e) => { detect(e) })


