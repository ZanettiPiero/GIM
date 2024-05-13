function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(200)

	fill(0)
	noStroke()

	translate(width/2, height/2)

	push()
	rotate(0.2)
	rect(0, 0, 100, 20)

	translate(110,0)
	rotate(-0.2)
	rect(0, 0, 100, 20)

	translate(110,0)
	rect(0, 0, 100, 20)
	pop()
	
}