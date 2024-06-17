function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(220)

	let s = second()
	if (s < 10) {
		s = "0" + s
	}

	let m = minute()
	if (m < 10) {
		m = "0" + m
	}

	let h = hour()
	if (h < 10) {
		h = "0" + h
	}

	//let txt =  hour() + ":" + minute() + ":" + s
	
	noStroke()
	fill(0)
	rect(0, height/3 * 0, second() / 60 * width, height/3)
	circle(width, width/4 * 1, width/2, minute() / 60 * height)
	rect(width/2, height/3 * 2, height/3, hour()   / 24 * width)

	//textAlign(CENTER, CENTER)
	//textSize(30)
	//fill(255)
	//text(txt, width/2, height/2)

	//const totaleSecondi = hour() * 60 * 60 + minute() * 60 + second()
	//text(totaleSecondi, width/2, height/2)


}