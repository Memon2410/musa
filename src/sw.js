var CACHE_NAME = 'xx-v1'
var urlsToCache = [
  '/index.html',
  '/css/app.css',
  '/js/app.js'
]

self.addEventListener('install', function (event) {
  // Perform install steps
  // console.log('installing sw')
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        // console.log('Opened cache')
        var x = cache.addAll(urlsToCache)
        // console.log('cache added')
        return x
      })
  )
})

self.addEventListener('activate', (event) => {
  // console.log('activate: ', event)
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      }
      )
  )
})
