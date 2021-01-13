import $ from 'jquery'

export default class News {
  constructor () {
    this.breakNews = document
      .getElementsByClassName('container-news')[0]
      .getElementsByTagName('li')[0]

    this.contentSchedule = document.getElementsByClassName(
      'content schedule'
    )[0]
    this.containerHours = document.getElementsByClassName('container-hours')[0]
    this.containerShows = document.getElementsByClassName('container-shows')[0]
    this.itemHour = document.getElementsByClassName('item-hour')
    this.itemShow = document.getElementsByClassName('item-show')
    this.sizeOne = document.getElementsByClassName('size-one')
    this.sizeTwo = document.getElementsByClassName('size-two')
    this.sizeThree = document.getElementsByClassName('size-three')
    this.sizeFour = document.getElementsByClassName('size-four')
    this.sizeFive = document.getElementsByClassName('size-five')
    this.sizeSix = document.getElementsByClassName('size-six')
    this.sizeSeven = document.getElementsByClassName('size-seven')
    this.sizeEight = document.getElementsByClassName('size-eight')
  }

  setSizeSchedule (size) {
    const diffSize = size === 'small' ? 138 : 310
    const itemSize =
      size === 'small'
        ? this.contentSchedule.offsetWidth - diffSize
        : (this.contentSchedule.offsetWidth - diffSize) / 3
    const containersWidth = itemSize * 50

    Array.from(this.itemHour).map((current, index) => {
      current.style.width = itemSize + 'px'
    })

    Array.from(this.itemShow).map((current, index) => {
      current.style.width = containersWidth + 'px'
    })

    Array.from(this.sizeOne).map((current, index) => {
      current.style.width = itemSize + 1.5 + 'px'
    })
    Array.from(this.sizeTwo).map((current, index) => {
      current.style.width = (itemSize + 1.5) * 2 + 'px'
    })
    Array.from(this.sizeThree).map((current, index) => {
      current.style.width = (itemSize + 1.5) * 3 + 'px'
    })
    Array.from(this.sizeFour).map((current, index) => {
      current.style.width = (itemSize + 1.5) * 4 + 'px'
    })

    Array.from(this.sizeFive).map((current, index) => {
      current.style.width = (itemSize + 1.5) * 5 + 'px'
    })
    Array.from(this.sizeSix).map((current, index) => {
      current.style.width = (itemSize + 1.5) * 6 + 'px'
    })
    Array.from(this.sizeSeven).map((current, index) => {
      current.style.width = (itemSize + 1.5) * 7 + 'px'
    })
    Array.from(this.sizeEight).map((current, index) => {
      current.style.width = (itemSize + 1.5) * 8 + 'px'
    })

    this.containerHours.style.width = containersWidth + 'px'
    this.containerShows.style.width = containersWidth + 'px'
  }

  createTicker () {
    $('.message-news li').wrapAll('<span class="ticker-items">')
    const tickerWidth = $('.message-news').width()
    const spanWidth = $('.message-news span').width()

    $('.message-news span')
      .clone()
      .appendTo('.message-news')
    $('.message-news span').wrapAll('<span class="ticker-wrapper">')

    window.gsap.set('.ticker-wrapper', { x: tickerWidth })
    const tl = new window.TimelineMax({ repeat: -1 })

    tl.to('.ticker-wrapper', 1, {
      x: '-=50',
      ease: window.Power0.easeNone,
      onComplete: function () {
        const style = window.getComputedStyle($('.ticker-wrapper')[0])
        const matrix = new WebKitCSSMatrix(style.webkitTransform)
        if (matrix.m41 < 0 - spanWidth) {
          window.gsap.set('.ticker-wrapper', { x: 0 })
        }
        this.invalidate()
      }
    })
  }

  initNews () {
    const size = window.innerWidth >= 992 ? 'big' : 'small'

    this.setSizeSchedule(size)
    this.createTicker()
  }
}
