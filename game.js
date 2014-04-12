// Handle keyboard controls
var keysDown = {};
var keysUp = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	keysUp[e.keyCode] = true;
	delete keysDown[e.keyCode];
}, false);

//	Initialize
var preload = function() {
	//	Create world
	for (var z = 0; z < 10 ; z++) {
		for (var i = 0; i < 11; i++) {
			for (var j = 0; j < 1; j++) {
				tileList[tCount] = new tile(i*IMAGESIZE+(z*448), 10*IMAGESIZE-(IMAGESIZE/2));
			}
		}
	}
	
	//	Create player
	playerList[pCount] = new magnet(160, 160);
	playerList[pCount] = new magnet2(500, 160);
};

//	Update
var update = function (modifier) {
	input(modifier);	//	First gather input
	act(modifier);	//	Then make all objects act based on inputs
	//resolve(modifier);	//	Do collisions and resolve based on object's acts
};

//	Draw
var render = function (modifier) {
	//	Draw a plain white background to clear everything
	ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect (0,0,CANVASWIDTH,CANVASHEIGHT);
	
	//	Draw World
	drawList(tileList);
	
	//	Draw Magnets
	drawList(playerList);
};

//	The game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;
	modifier = delta / 1000;

	update(modifier);
	render();

	then = now;
};

//	Run the game!
var then = Date.now();
preload();
setInterval(main, 1);