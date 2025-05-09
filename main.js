Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

background_image = "mars.jpg"
rover_image = "rover.png"

rover_width = 100;
rover_height = 90;

rover_x = 0
rover_y = 0

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