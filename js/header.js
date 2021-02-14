function menuOnClick() {
  document.getElementById('menu-bar').classList.toggle('change')
  document.getElementById('nav').classList.toggle('change')
  document.getElementById('menu-bg').classList.toggle('change-bg')
}

// navbar solid
window.onscroll = () => {
  const nav = document.querySelector('.null')
  // const this.scrollY = window.pageYOffset
  if (window.innerWidth > 1000) {
    if (this.scrollY < 10) {
      nav.classList.remove('black')
    } else if ((this.scrollY >= 10) & (this.scrollY < 650)) {
      nav.classList.remove('red', 'yellow', 'blue')
      nav.classList.add('black')
    } else if ((this.scrollY >= 650) & (this.scrollY < 1310)) {
      nav.classList.remove('black', 'yellow', 'blue')
      nav.classList.add('red')
    } else if ((this.scrollY >= 1310) & (this.scrollY < 1960)) {
      nav.classList.remove('black', 'red', 'blue')
      nav.classList.add('yellow')
    } else if ((this.scrollY >= 1960) & (this.scrollY < 2610)) {
      nav.classList.remove('red', 'yellow', 'blue')
      nav.classList.add('black')
    } else if (this.scrollY >= 2610) {
      nav.classList.remove('black', 'yellow', 'red')
      nav.classList.add('blue')
    }
  } else {
    nav.classList.add('black')
  }
}
