How to Use the Application / Game Steps:
==================

(1) Open index.html in a browser (must support HTML5 and have JavaScript enabled)

(2) There is one main Player or Hero in the game.

(3) The bugs in the game are the "enemies" or bad guys that the player needs to avoid. 

(4) The Canvas or Game environment consists of grass blocks at the bottom where the Player originally stands (his start position), the stone blocks in the middle that the bugs traverse, and water blocks at the top.

(5) Player movement - pressing the up, down, right and left keys on your keyboard will move the player in those directions. 
The player speed is 78 pixels, meaning one step in any direction changes his position by 78 pixels.

(6) Enemy movement - the enemies move continuously across the screen from left to right, at random speeds

(7) Goal - The goal of the game is for the player to navigate the canvas without hitting the bugs or the water

(8) Losing the Game - The player will lose and the game will be reset if the player (a) either hits any of the bugs, or (b) hits the water blocks at the top

(9) When the player loses, the his position is reset to original - meaning he goes back to the center of the grass blocks.

Technical Details:
==================

(1)The setting up of the game canvas and the loading of the game environment is done 
for us in engine.js and resources.js. The main game loop that continually 
updates it, is inside engine.js (pre-writted) and uses requestAnimationFrame
to queue up the next loop (http://jlongster.com/Making-Sprite-based-Games-with-Canvas)
	
(2) The Player and Enemy objects are created in app.js using the combination 
constructor and prototype pattern. The properties are set using the 
constructor pattern. The object methods (containing functionality common to  
all instances of an object) are created using the prototype pattern.
	
(3) The Player object contains the player's x and y positions, its speed
and its image. Its methods include update, render and handleInput.
	
	In my version:
	
	(a)the update method resets the player position on collision 
	with the enemy, or when the player hits the water blocks.
	
	(b)the render method (pre-written) renders or draws the player image on the 
	canvas at the x and y positions set in the Player constructor .
	
	(c)the handleInput method animates the player and gives it a direction
	to move in depending which key is pressed, and incrementing or decrementing
	the x or y positions by the speed value. A pre-written addEventListener 
	function calls handleInput on key presses. 
	The handleInput method also prevents the player from leaving the canvas 
	boundaries.
	
(4) The Enemy object contains the enemy's original x and y positions (where y is a 
point selected randomly from an array of appropriate positions along y),  
a random speed property, and the enemy image.The Enemy methods include 
update and render.
	
	(a)the update method updates enemy position if the enemy leaves canvas 
	boundaries, and activates enemies by incrementing their x positions by 
	a randomly set speed multiplied by dt (which is calculated inside engine.js)
	
(5) I modified dt in engine.js to divide (now - lastTime) by 23 instead of 1000 to 
control bug speed



