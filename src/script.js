var audio = new Audio('src/sfx.mp3');


DomReady.ready(function () {

        shaverBtn.addEventListener('touchstart', function(e){
       beginShave();
	}, false);
	
    shaverBtn.addEventListener('touchend', boxTouchEnd, false);

});

function beginShave(e){
    audio.play();
    window.navigator.vibrate(5000);
}
function boxTouchEnd(e){
    audio.pause();
    window.navigator.vibrate(0);
    audio.currentTime = 0;
}