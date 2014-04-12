//	input.js

function input(modifier) {	
	//	Move player
	if (key["left"] in keysDown && !(key["left"] in keysUp)) {
		playerList[selectedMagnet].x += PLAYERSPEED * modifier * -1;
	}
	if (key["right"] in keysDown && !(key["right"] in keysUp)) {
		playerList[selectedMagnet].x += PLAYERSPEED * modifier * 1;
	}
	
	//	Jump!
	if (key["spacebar"] in keysDown && !(key["spacebar"] in keysUp) && !playerList[selectedMagnet].falling) {
		if (playerList[selectedMagnet].jumpTimer < 0.5) {
			playerList[selectedMagnet].falling = false;
			playerList[selectedMagnet].jumping = true;
			playerList[selectedMagnet].jumpTimer += modifier;
			playerList[selectedMagnet].y -= 256 * modifier;
		}
		else {
			delete keysDown[key["spacebar"]];
		}
	}
	
	if (key["y"] in keysDown && !(key["y"] in keysUp)) {
		if (selectedMagnet == 0) {
			selectedMagnet = 1;
			idleMagnet = 0;
			repositionCam(0, 1);
			playerList[idleMagnet].jumping = false;
		}
		else {
			selectedMagnet = 0;
			idleMagnet = 1;
			repositionCam(1, 0);
			playerList[idleMagnet].jumping = false;
		}
		delete keysDown[key["y"]];
	}
	
	//	TyDo: Testing polarity
	if (key["x"] in keysDown && !(key["x"] in keysUp)) {
		if (polarity == 1) {
			polarity = -1;
		}
		else if (polarity == -1){
			polarity = 1;
		}
		delete keysDown[key["x"]];
	}
	
	// Release all keys
	if ( !(key["y"] in keysDown) ) {
		delete keysUp[key["y"]];
	}
	if ( !(key["x"] in keysDown) ) {
		delete keysUp[key["x"]];
	}
	if ( !(key["b"] in keysDown) ) {
		delete keysUp[key["b"]];
	}
	if ( !(key["a"] in keysDown) ) {
		delete keysUp[key["a"]];
	}
	if ( !(key["up"] in keysDown) ) {
		delete keysUp[key["up"]];
	}
	if ( !(key["down"] in keysDown) ) {
		delete keysUp[key["down"]];
	}
	if ( !(key["left"] in keysDown) ) {
		delete keysUp[key["left"]];
	}
	if ( !(key["right"] in keysDown) ) {
		delete keysUp[key["right"]];
	}
	if ( !(key["spacebar"] in keysDown) ) {
		//	TyDo: Testing for jump, just resets when releasing y
		playerList[selectedMagnet].jumping = false;
		delete keysUp[key["spacebar"]];
	}
}