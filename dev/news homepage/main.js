import './scss/style.scss'
const body = document.querySelector('body')
const open = document.querySelector('.nav__btn__open')
const close = document.querySelector('.nav__btn__close')
const overlay = document.querySelector('.nav__overlay')
const mobileMenu = document.querySelector('.nav__cont')
const size = window.matchMedia('(width <69.3em)')
let status = open.getAttribute('aria-expanded') === 'true'

const openMenu = () => {
    if (!status) {
        mobileMenu.classList.add('open')
        overlay.classList.add('open')
        body.classList.add('noscroll')
        open.setAttribute('aria-expanded', true)
        status = true
    }

}
const closeMenu = () => {
    if (status) {
        mobileMenu.classList.remove('open')
        overlay.classList.remove('open')
        body.classList.remove('noscroll')
        open.setAttribute('aria-expanded', false)
        status = false
    }


}


const detect = (e) => {
    if (e.matches) {
        setTimeout(() => {
            mobileMenu.style.display = 'block'

        }, 500)

    }
}
document.addEventListener('DOMContentLoaded', () => {
    open.addEventListener('click', openMenu)

    size.addEventListener('change', (e) => { detect(e) })

    close.addEventListener('click', closeMenu)
})


