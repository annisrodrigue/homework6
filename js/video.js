var video;
// var playButton = document.querySelectorAll(".play");
// console.log(playButton[0]);
// playButton[0].innerHTML = '<img src="../images/play.jpg">';

function getVid(){
	video = document.querySelector("#myVideo");
	var playButton = document.querySelectorAll(".play");
	playButton[0].innerHTML = "<img src = 'images/play.jpg' alt='play'/> Play Video";
	var pauseButton = document.querySelectorAll(".pause");
	pauseButton[0].innerHTML = "<img src = 'images/pause.png' alt='play'/> Pause Video";
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	var vol = document.querySelector('#volume');
	vol.innerHTML = (video.volume * 100) + '%';
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= .8;
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime >= 536){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 60;
	}
	console.log("Current location is " + video.currentTime);
} 

function mute() { 
  	if (video.muted){
  		video.muted = false;
  		console.log("Unmuted");
  		document.querySelector('#mute').innerHTML = 'Mute';
  	}
  	else{
  		video.muted = true;
      	console.log("Muted");
      	document.querySelector('#mute').innerHTML = 'Unmute';
  	}
}

function changeVolume() {
	video.volume = (document.querySelector("#volumeSlider").value) * .01;
	console.log("Volume is " + video.volume);
	var vol = document.querySelector('#volume');
	vol.innerHTML = (video.volume * 100) + '%';
}
       

function gray() { 
	document.querySelector('#myVideo').setAttribute('class', 'grayscale');
	console.log("In grayscale");
}

function color() {
	document.querySelector('#myVideo').setAttribute('class', 'color');
	console.log("In color") 
}
