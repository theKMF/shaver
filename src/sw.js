self.addEventListener('fetch', function(event){ 
 event.respondWith(
   console.log('OMG SW is here');
 );
});
