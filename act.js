//	act.js

function act(modifier) {	
	//	act camera
	var cameraDeltaX = cameraX - playerList[selectedMagnet].x;
	for (i = 0; i < tileList.length; i++) {
		tileList[i].x += cameraDeltaX;
	}
	playerList[idleMagnet].x += cameraDeltaX;
	playerList[selectedMagnet].x = 160;
	
	//	act gravity
	for (var i = 0; i < playerList.length; i++) {
		if (!playerList[i].jumping) {
			var fallCount = 0;	//	If this value is 0, indicates that no objects are stopping the player from falling
			for (var j = 0; j < tileList.length; j++) {
				if (collidesWith(playerList[i], tileList[j])) {
					fallCount++;
				}
			}
			if (fallCount > 0) {
				playerList[i].falling = false;
				playerList[i].canJump = true;
				playerList[i].deltaT = 0;
				playerList[i].jumpTimer = 0;
			}
			else {
				playerList[i].falling = true;
			}
			if (playerList[i].falling) {
				playerList[i].deltaT += modifier;
				playerList[i].y += GRAVITY * playerList[i].deltaT * playerList[i].deltaT;
			}
		}
	}
	
	//	act magnetism
	if (!collidesWith(playerList[selectedMagnet], playerList[idleMagnet])) {
		var delta = playerList[selectedMagnet].x - playerList[idleMagnet].x;
		if (delta > 0) {
			playerList[selectedMagnet].x -= PLAYERSPEED/4 * modifier * polarity;
			playerList[idleMagnet].x += PLAYERSPEED/4 * modifier * polarity;
		}
		else {
			playerList[selectedMagnet].x += PLAYERSPEED/4 * modifier * polarity;
			playerList[idleMagnet].x -= PLAYERSPEED/4 * modifier * polarity;
		}
	}
};