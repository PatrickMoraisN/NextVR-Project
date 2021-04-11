const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')
const navToggle = document.querySelector('.bar')

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})