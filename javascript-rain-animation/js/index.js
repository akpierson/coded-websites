var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//---Return Random Number---//
function randomNum(max, min) {
	return Math.floor(Math.random() * max) + min;
}

//---Create And Animate Raindrops---//
function RainDrops(x, y, endy, velocity, opacity) {
	this.x = x;
	this.y = y;
	this.endy = endy;
	this.velocity = velocity;
	this.opacity = opacity;

	this.draw = function() {
		//---Rain Path---//
		c.beginPath();
		c.moveTo(this.x, this.y);
		c.lineTo(this.x, this.y - this.endy);
		c.lineWidth = 1;
		c.strokeStyle= "rgba(255, 255, 255, " + this.opacity + ")";
		c.stroke();
	}


	this.update = function() {
		var rainEnd = window.innerHeight + 100;
		if (this.y >= rainEnd) {
			this.y = this.endy - 100;
		} else {
			this.y = this.y + this.velocity;
		}

		this.draw();
	}
}



var rainArray = [];

for (var i = 0; i < 250; i++) {
	var rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
	var rainYLocation = Math.random() * -500;
	var randomRainHeight = randomNum(60, 30);
	var randomSpeed = randomNum(18, 12);
	var randomOpacity = Math.random() * 0.18;
	rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
}

function animateRain() {
	
	requestAnimationFrame(animateRain);
	c.clearRect(0,0, window.innerWidth, window.innerHeight);


	for (var i = 0; i < rainArray.length; i++) {
		rainArray[i].update();
	}	
}

animateRain();