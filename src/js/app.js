// Styles
import '../scss/app.scss'

// Dependencies
// import { gsap, CSSRulePlugin, ScrollToPlugin } from 'gsap/all'

// Utils
import Auxiliar from './utils/auxiliar'
import Lazy from './utils/lazy'

// Layout
import Header from './layout/header'

// Sections
import News from './sections/news'

document.addEventListener('DOMContentLoaded', () => {
  const header = new Header()
  header.initHeader()

  const news = new News()
  news.initNews()
})

/*
// Initialize service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(
      registration => {
        // Registration was successful
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        )
      },
      err => {
        // registration failed :(
        console.log(':( ServiceWorker registration failed: ', err)
      }
    )
  })
}
*/