var audio;


DomReady.ready(function () {
    
    if ('serviceWorker' in navigator) {
        console.log('navigator available');
        navigator.serviceWorker.register('/sw.js').then(function(reg) {
        console.log('ServiceWorker registration successful with scope: ', reg.scope);
    }).catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}
   
    shaverBtn.addEventListener('touchstart', function(e){
       beginShave();
	}, false);
	
    shaverBtn.addEventListener('touchend', boxTouchEnd, false);

});

function setUp(){
    audio = new Audio('src/sfx.mp3');
}

function beginShave(e){
    audio.play();
    window.navigator.vibrate(9300);
}
function boxTouchEnd(e){
    audio.pause();
    window.navigator.vibrate(0);
    audio.currentTime = 0;
}