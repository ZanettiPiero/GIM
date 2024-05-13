function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)

	stroke(255)
	
	
	 for (let i = 0; i < 200; i++){
		 let lunghezza = random(20, 100)
		 let gocciaX = random(0, width)
		 let gocciaY = random(- lunghezza, height)
		 strokeWeight(random(1, 3))
		 line(gocciaX, gocciaY, gocciaX, gocciaY + lunghezza)
		}
	if(random(100) < 0.8) background(255)

}