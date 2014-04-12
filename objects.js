//	objects.js

var playerList = new Array();
var tileList = new Array();
var pCount = 0;
var tCount = 0;

function magnet(x, y) {
	//	Position
	this.x = x;
	this.y = y;
	this.velocityX = 0;
	this.velocityY = 0;
	this.accelerationX = 0;
	this.accelerationY = 256;
	this.deltaT = 0;
	this.falling = true;
	this.jumping = false;
	this.jumpTimer = 0;
	//	Stats
	this.health = 0;
	//	Image
	this.imageX = 0;
	this.imageY = 0;
	this.imageSource = new Image();
	this.imageSource.src = "images/magnet.png";
	pCount++;
}

function magnet2(x, y) {
	//	Position
	this.x = x;
	this.y = y;
	this.velocityX = 0;
	this.velocityY = 0;
	this.accelerationX = 0;
	this.accelerationY = 256;
	this.deltaT = 0;
	this.falling = true;
	this.jumping = false;
	this.jumpTimer = 0;
	//	Stats
	this.health = 0;
	//	Image
	this.imageX = 0;
	this.imageY = 0;
	this.imageSource = new Image();
	this.imageSource.src = "images/magnet2	.png";
	pCount++;
}

function tile(x, y) {
	//	Position
	this.x = x;
	this.y = y;
	//	Image
	this.imageX = 0;
	this.imageY = 0;
	this.imageSource = new Image();
	this.imageSource.src = "images/floor.png";
	tCount++;
}