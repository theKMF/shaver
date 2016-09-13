self.addEventListener('fetch', event => { 
 event.respondWith(
   new Response("OMG it's a shaver");  
 );
});
