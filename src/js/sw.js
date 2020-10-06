self.addEventListener('install', (event) => {
  console.log('Inside the UPDATED install handler:', event)
  event.waitUntil(
    caches.open('XX-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/css/app.css',
        '/js/app.js'
      ])
    })
  )
})

self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event)
})

self.addEventListener(fetch, (event) => {
  console.log('Inside the fetch handler:', event.request.url)
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request)
    })
  )
})
