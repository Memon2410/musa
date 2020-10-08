export default class News {
  constructor() {
    this.breakNews = document.getElementsByClassName('container-news')[0].getElementsByTagName('p')[0]

  }

  setSize() {
    this.breakNews.style.width = window.innerWidth * 0.825 + 'px'
  }

  initNews() {
    if (window.innerWidth >= 992) {
      this.setSize()
    }

    window.addEventListener('resize', event => {
      if (window.innerWidth >= 992) {
        this.setSize()
      }
    })
  }
}