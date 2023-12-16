const main = document.querySelector('.main')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const navList = document.querySelector('.nav__list')

open.addEventListener('click', () => {
  main.classList.add('main--active')
  open.classList.add('open--active')
  close.classList.add('close--active')
  navList.classList.add('nav__list--active')
})

close.addEventListener('click', () => {
  main.classList.remove('main--active')
  open.classList.remove('open--active')
  close.classList.remove('close--active')
  navList.classList.remove('nav__list--active')
})
