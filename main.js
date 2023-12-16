document.querySelector('.menu__btn').addEventListener('click', () => {
  const main = document.querySelector('.main')
  const nav = document.querySelector('.nav')

  if (main.classList.contains('main--rotated')) {
    nav.classList.remove('nav--active')
    return main.classList.remove('main--rotated')
  }
  nav.classList.add('nav--active')
  main.classList.add('main--rotated')
})
