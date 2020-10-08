export default class Header {
  constructor () {
    this.open = document.getElementsByClassName('button-open')[0]
    this.close = document.getElementsByClassName('button-close')[0]
    this.menu = document.getElementsByClassName('bg-menu')[0]
  }

  initHeader () {
    this.open.addEventListener('click', event => {
      this.menu.style.display = 'block'
    })

    this.close.addEventListener('click', event => {
      this.menu.style.display = 'none'
    })
  }
}
