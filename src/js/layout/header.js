export default class Header {
  constructor () {
    this.open = document.getElementsByClassName('button-open')[0]
    this.close = document.getElementsByClassName('button-close')[0]
    this.menu = document.getElementsByClassName('bg-menu')[0]

    this.linesOpen = this.open.getElementsByTagName('span')
    this.linesClose = this.close.getElementsByTagName('span')
  }

  initHeader () {
    this.open.addEventListener('mouseover', event => {
      window.gsap.to(this.linesOpen[0], 0.5, {
        scaleX: 1.1,
        y: 3
      })

      window.gsap.to(this.linesOpen[1], 0.5, {
        scaleX: 1.25
      })

      window.gsap.to(this.linesOpen[2], 0.5, {
        scaleX: 1.5,
        y: -3
      })
    })

    this.open.addEventListener('mouseout', event => {
      window.gsap.to(this.linesOpen[0], 0.5, {
        scaleX: 1,
        y: 0
      })

      window.gsap.to(this.linesOpen[1], 0.5, {
        scaleX: 1
      })

      window.gsap.to(this.linesOpen[2], 0.5, {
        scaleX: 1,
        y: 0
      })
    })

    this.close.addEventListener('mouseover', event => {
      window.gsap.to(this.linesClose[0], 0.5, {
        y: 15,
        rotate: 45
      })

      window.gsap.to(this.linesClose[2], 0.5, {
        y: -17,
        rotate: -45
      })

      window.gsap.to(this.linesClose[1], 0.5, {
        alpha: 0
      })
    })

    this.close.addEventListener('mouseout', event => {
      window.gsap.to(this.linesClose[0], 0.5, {
        y: 0,
        rotate: 0
      })

      window.gsap.to(this.linesClose[2], 0.5, {
        y: 0,
        rotate: 0
      })

      window.gsap.to(this.linesClose[1], 0.5, {
        alpha: 1
      })
    })

    this.open.addEventListener('click', event => {
      this.menu.style.display = 'block'
    })

    this.close.addEventListener('click', event => {
      this.menu.style.display = 'none'
    })
  }
}
