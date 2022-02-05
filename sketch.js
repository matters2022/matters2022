
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw() {

	var tamango = random(20);
	rect(mouseX, mouseY, tamango, tamango);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}