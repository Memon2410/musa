export default class Header {
  constructor () {
    this.body = document.getElementsByTagName('body')[0]
    this.open = document.getElementsByClassName('button-open')[0]
    this.close = document.getElementsByClassName('button-close')[0]
    this.menu = document.getElementsByClassName('bg-menu')[0]
    this.main = document.getElementsByTagName('main')[0]
    this.generalFooter = document.getElementsByClassName('general-footer')[0]
    this.headerHome = document.getElementsByClassName('content-header-home')[0]

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
      this.main.style.display = 'none'
      this.generalFooter.style.display = 'none'
      this.headerHome.style.opacity = '0'

      window.gsap.to(this.menu, 0.5, {
        alpha: 1
      })
    })

    this.close.addEventListener('click', event => {
      this.main.style.display = 'block'
      this.generalFooter.style.display = 'block'
      this.headerHome.style.opacity = '1'
      window.gsap.to(this.menu, 0.5, {
        alpha: 0,
        onComplete: () => {
          this.menu.style.display = 'none'
        }
      })
    })
  }
}
