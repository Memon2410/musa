export default class News {
  constructor () {
    this.breakNews = document
      .getElementsByClassName('container-news')[0]
      .getElementsByTagName('p')[0]

    this.contentSchedule = document.getElementsByClassName('content schedule')[0]
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
    const itemSize = size === 'small' ? this.contentSchedule.offsetWidth - diffSize : (this.contentSchedule.offsetWidth - diffSize) / 3
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

  setSizeNews () {
    this.breakNews.style.width = window.innerWidth * 0.825 + 'px'
  }

  initNews () {
    let size = window.innerWidth >= 992 ? 'big' : 'small'

    if (window.innerWidth >= 992) {
      this.setSizeNews()
    }

    this.setSizeSchedule(size)

    window.addEventListener('resize', event => {
      if (window.innerWidth >= 992) {
        this.setSizeNews()
      }
    })
  }
}
