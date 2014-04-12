//	initialize.js

//	Initialize variables for the game, and also declare constants

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 320;
canvas.height = 320;
document.body.appendChild(canvas);

//	CONSTANTS
var IMAGESIZE = 32;
var PLAYERSPEED = 256;	//	pixels per second
var CANVASSIZE = 320;
var CENTERX = 160;
var CENTERY = 160;

// 	Game variables
var screen = "game"		//	Screen currently in view (ie: menu, game, options)
var distancex = 0;		//	Distance covered, 0 indicates starting position
var distancey = 0;

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