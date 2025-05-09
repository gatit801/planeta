Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

background_image = "mars.jpg"
rover_image = "rover.png"

rover_width = 100;
rover_height = 90;

rover_x = 0
rover_y = 90

function add() {
	background_imTag = new Image ();
	background_imTag.onload =uploadBackground;
	background_imTag.src = background_image;

	rover_img = new Image ();
	rover_img.onload = uploadrover;
	rover_img.src = rover_image;
}

function uploadBackground() {
	ctx.drawImage(background_imTag, 0, 0, Canvas.width, Canvas.height)
}

function uploadrover() {
	ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener(("keydown"),my_keydown)
function my_keydown(e){	
	keyPressed = e.keyCode
	console.log(keyPressed)

	if(keyPressed == "38"){
		up();
		console.log ("up")
	}
	if(keyPressed == "40"){
		down();
		console.log ("down")
	}
	if(keyPressed == "37"){
		left();
		console.log ("left")

	}
	if(keyPressed == "39"){
		rigth();
		console.log ("rigth")
	}
}

function up(){
	if(rover_y >=0){
		rover_y = rover_y -10;
		console.log("when up arrow is pressed, x =" + rover_x + "| y = " + rover_y)
		uploadBackground();
		uploadrover();
	}
}

function down(){
	if(rover_y <=550){
		rover_y = rover_y +10;
		console.log("when up arrow is pressed, x =" + rover_y + "| y = " + rover_x)
		uploadBackground();
		uploadrover();
	}
}

function rigth(){
	if(rover_x <=740){
		rover_x = rover_x +10;
		console.log("when up arrow is pressed, x =" + rover_y + "| y = " + rover_x)
		uploadBackground();
		uploadrover();
	}
}

function left(){
	if(rover_x >=0){
		rover_x = rover_x -10;
		console.log("when up arrow is pressed, x =" + rover_y + "| y = " + rover_x)
		uploadBackground();
		uploadrover();
	}
}