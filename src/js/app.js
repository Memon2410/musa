// Styles
import '../scss/app.scss'

// Import classes

document.addEventListener('DOMContentLoaded', () => {})

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
