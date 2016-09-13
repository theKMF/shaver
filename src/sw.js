self.addEventListener('fetch', function(event){ 
 event.respondWith(
   new Response("OMG it's a shaver")  
 );
});
