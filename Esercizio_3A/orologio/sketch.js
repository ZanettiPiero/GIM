function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)

	let s = second()
	if (s < 10) {
		s = "0" + s
	}

	let h = hour()
	if (h < 10) {
		h = "0" + h
	}

	let m = minute()
	if (m < 10) {
		m = "0" + m
	}

	
	let hourSize = map(h % 12, 0, 11, 0, width)
	let minuteSize = map(m, 0, 59, 0, width / 5)
	let secondSize = map(s, 0, 59, 0, width / 2)


	fill(255)
	noStroke()
	triangle(width / 3, height / 2, hourSize, hourSize)

	fill(255)
	noStroke()
	ellipse(width / 5, height / 2, minuteSize, minuteSize)

	fill(255)
	noStroke()
	rect(width / 2, height / 10, secondSize, secondSize)



}