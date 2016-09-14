self.addEventListener('install', function(event) {
    console.log(‘What is Service Worker Installing’);
});
    
var CACHE_NAME = 'shaver-cache-v1';
  var urlsToCache = [
    '/src/sfx.mp3',
    '/src/style.css',
  ];