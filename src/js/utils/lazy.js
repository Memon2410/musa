export default class Lazy {
  constructor () {
    this.lazyImages = document.querySelectorAll('img.lazyload')
  }

  initLazy () {
    if ('loading' in HTMLImageElement.prototype) {
      this.lazyImages.forEach(img => {
        img.src = img.dataset.src
      })
    } else {
      let script = document.createElement('script')
      script.async = true
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js'
      document.body.appendChild(script)
    }
  }
}
