export default class Preloader {
  constructor () {
    this.container = document.getElementsByTagName('main')[0]
    this.preloader = document.getElementsByClassName('preloader')[0]
  }

  initPreloader () {
    this.addEvents()
  }

  addEvents () {
    const els = document.getElementsByTagName('section')

    for (let i = 0; i < els.length; i++) {
      if (i === els.length - 1) {
        this.show()
      }
    }
  }

  clearPreloader () {
    window.gsap.to(document.getElementsByClassName('preloader')[0], 0.25, {
      autoAlpha: 0
    })
  }

  show () {
    window.gsap.to(window, { duration: 0.1, scrollTo: 0 })
    window.gsap.to(this.container, 0.25, {
      alpha: 1,
      delay: 0.15,
      onComplete: this.clearPreloader
    })
  }

  hide () {
    window.gsap.to(this.container, 0.25, {
      onComplete: this.addEvents()
    })
  }
}