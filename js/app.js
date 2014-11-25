/** 
 * Player class
 * This class requires an update(), render() and
 * a handleInput() method.
 * @constructor
 * /
var Player = function () {
	this.sprite = 'images/char-boy.png';
	this.x = 205;
	this.y = 380;
	this.speed = 78;
};

Player.prototype.update = function(dt) {
	/** checks for player-enemy collisions and updates player position on collision */
	for(var i = 0, numOfEnemies = allEnemies.length; i < numOfEnemies; i++) {
		if(player.x <= (allEnemies[i].x + 55) && 
		allEnemies[i].x <= (player.x + 55) && 
		player.y <= (allEnemies[i].y + 50) && 
		allEnemies[i].y <= (player.y + 50)) {
			player.x = 205;
			player.y = 380;
		}
		//checks if player is touching water blocks, and resets player's position if true	
		if(player.y < 60) {
			player.x = 205;
			player.y = 380;
		}
	}
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/** handles player movement direction and speed */
Player.prototype.handleInput = function(_key) {
	switch(_key) {
		 case 'left':
			player.x -= player.speed;
			break;
		case 'right':
			player.x += player.speed;
			break;
		case 'up':
			player.y -= player.speed;
			break;
		case 'down':
			player.y += player.speed;
			break;
	}
		
	/** conditions to ensure that player cannot leave canvas (game environment) boundaries */
	if(player.x < 0) {
		player.x = 0;
	}
	if(player.y < 0) {
		player.y = 0;
	}
	if(player.x + 100 > 505) {
		player.x = 405; //(505-100)
	}
	if(player.y + 175 > 606) {
		player.y = 431; //(606-175)
	}
};

/** array of predetermined enemy positions on y */
var positionArray = [65, 145, 227]; 

/** 
 * Enemy class 
 * @constructor
 */

var Enemy = function() {
    /**
     * The image/sprite for enemies uses
     * a helper provided for easily loading images
     */
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = positionArray[Math.floor(Math.random() * 3)];
    this.speed = Math.random() * 10;
};

/**
 * Update the enemy's position, required method for game
 * @param (number) dt This is a time delta between ticks
 */

Enemy.prototype.update = function(dt) {
	/** updates enemy position when enemy leaves canvas boundaries */
	if (this.x > 505) {
		this.x = -80;
		this.y = positionArray[Math.floor(Math.random() * 3)];
	/** activates enemy instances by incrementing their x positions by a randomly determined speed */
	} else {
		this.x += (Math.random() * this.speed + 1) * dt;
	}
};

/** Draw the enemy on the screen, required method for game */
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/** 
 * Create enemies by pushing new enemy objects into the
 * allEnemies array until there are 4 enemy instances 
 */

var allEnemies = [];

var createEnemies = function() {
	for (var i = 0; i < 4; i++) {
		var enemy = new Enemy();
		allEnemies.push(enemy);
	}
};
createEnemies();

/** Instantiate player */
var player = new Player();

/**
 * Add an event listener that listens for key presses. 
 * Also send the keys to the Player.handleInput() method. 
 * /
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


