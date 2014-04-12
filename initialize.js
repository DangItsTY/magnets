//	initialize.js

//	Initialize variables for the game, and also declare constants

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 320;
document.body.appendChild(canvas);

//	CONSTANTS
var IMAGESIZE = 32;
var PLAYERSPEED = 256;	//	pixels per second
var CANVASWIDTH = 640;
var CANVASHEIGHT = 320;
var CENTERX = 160;		//	May not need these anymore
var CENTERY = 160;
var GRAVITY = 16;

// 	Game variables
var screen = "game"		//	Screen currently in view (ie: menu, game, options)
var distancex = 0;		//	Distance covered, 0 indicates starting position
var distancey = 0;
var selectedMagnet = 0;	//	The currently controlled magnet
var idleMagnet = 1;	//	The currently controlled magnet
var cameraX = 160;
var polarity = 1;

//	Key Mapping
var key = new Array();
key["up"] = 87;
key["down"] = 83;
key["left"] = 65;
key["right"] = 68;
key["y"] = 78;
key["x"] = 74;
key["b"] = 77;
key["a"] = 75;
key["l"] = 16;
key["r"] = 186;
key["start"] = 27;
key["select"] = 13;
key["spacebar"] = 32;



//	TyDo: Test variables, make sure to sort this section out after the build
var drawList = function(list) {
	for (var i = 0; i < list.length; i++) {
		ctx.drawImage(list[i].imageSource, list[i].imageX*IMAGESIZE, list[i].imageY*IMAGESIZE, IMAGESIZE, IMAGESIZE, list[i].x-(IMAGESIZE/2), list[i].y-(IMAGESIZE/2), IMAGESIZE, IMAGESIZE);
	}
};

//	TyNote: Not needed
var moveListX = function(list, sign) {
	for (i = 0; i < list.length; i++) {
		list[i].x += PLAYERSPEED * modifier * sign;
	}
};

//	TyNote: Not needed
var moveListY = function(list, sign) {
	for (i = 0; i < list.length; i++) {
		list[i].y += PLAYERSPEED * modifier * sign;
	}
};

var collidesWith = function(object, target) {
	if (object.x <= target.x + IMAGESIZE && object.x >= target.x - IMAGESIZE &&
		object.y <= target.y + IMAGESIZE && object.y >= target.y - IMAGESIZE) {
		return true;
	}
	else {
		return false;
	}
};

var repositionCam = function(nonfocusMag, focusMag) {
	var difference = playerList[nonfocusMag].x - playerList[focusMag].x;
	for (i = 0; i < tileList.length; i++) {
		tileList[i].x += difference;
	}
	playerList[nonfocusMag].x += difference;
	playerList[focusMag].x += difference;
};

var repel = function(magnet,magnet2) {

	
}