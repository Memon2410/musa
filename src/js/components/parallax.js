class Parallax {
  constructor () {
    this.container = document.getElementsByClassName('responsive')[0]
    this.logo = document.getElementsByClassName('logo-responsive')[0]
  }

  initParallax () {
    const rect = this.container.getBoundingClientRect()
    const mouse = { x: 0, y: 0, moved: false }

    this.container.addEventListener('mousemove', event => {
      mouse.moved = true
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    })

    window.gsap.ticker.add(event => {
      if (mouse.moved) {
        parallaxIt(this.logo, -(window.innerWidth / 75))
      }
      mouse.moved = false
    })

    function parallaxIt (target, movement) {
      window.gsap.to(target, 0.5, {
        x: ((mouse.x - rect.width / 2) / rect.width) * movement,
        y: ((mouse.y - rect.height / 2) / rect.height) * movement
      })
    }
  }
}

export default Parallax
