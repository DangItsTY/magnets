var update = function (modifier) {
};

var render = function (modifier) {
	//	Draw Black background
	ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect (0,0,CANVASSIZE,CANVASSIZE);
};

var main = function () {
	var now = Date.now();
	var delta = now - then;
	modifier = delta / 1000;

	update(modifier);
	render();

	then = now;
};

var then = Date.now();
setInterval(main, 1);