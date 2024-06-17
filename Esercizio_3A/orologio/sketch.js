function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke()
	fill(255)
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
  
	let m = minute()
	if (m < 10) {
	  m = "0" + m
	}
  
	let h = hour()
	if (h < 10) {
	  h = "0" + h
	}
  
	
	translate(width / 2, height / 2)
  
	let angleIncrement = TWO_PI / 60
	let angleIncrementMin = TWO_PI / 60
	let angleIncrementHour = TWO_PI / 12
  
	
	for (let i = 0; i < 60; i++) {
	  push()
	  rotate(i * angleIncrement)  
	  if (i == s) {
		fill(0)
	  } else {
		fill(255)
	  }
	  rect(0, -400, 1, 10)        
	  pop()
	}
  
	
	for (let i = 0; i < 60; i++) {
	  push()
	  rotate(i * angleIncrementMin)  
	  if (i == m) {
		fill(0)
	  } else {
		fill(255);
	  }
	  rect(0, -350, 1, 75)                  
	  pop()
	}
  
	
	let hourOffset = 6 * angleIncrementHour
	for (let i = 0; i < 12; i++) {
	  push()
	  rotate(i * angleIncrementHour + hourOffset)  
	  if (i == h % 12) {
		fill(0)
	  } else {
		fill(255)
	  }
	  rect(0, 50, 1, 200)                 
	  pop()
	}
  }
  