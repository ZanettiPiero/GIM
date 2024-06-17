function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(255);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(0);
  
	let s = second();
	if (s < 10) {
	  s = "0" + s;
	}
  
	let m = minute();
	if (m < 10) {
	  m = "0" + m;
	}
  
	let h = hour();
	if (h < 10) {
	  h = "0" + h;
	}
  
	translate(width / 2, height / 2);
  
	let angleIncrement = TWO_PI / 60;
	let angleIncrementMin = TWO_PI / 60;
	let angleIncrementHour = TWO_PI / 12;
  
	let secondRectLength = height * 0.05; // Length of second rectangles
	let minuteRectLength = height * 0.15; // Length of minute rectangles (between second and hour lengths)
	let hourRectLength = height * 0.18; // Length of hour rectangles
  
	// Draw second rectangles
	for (let i = 0; i < 60; i++) {
	  push();
	  rotate(i * angleIncrement);
	  if (i == s) {
		fill(0);
	  } else {
		fill(255);
	  }
	  rect(0, -height / 2 + 20, 1, secondRectLength); // Adjusted length
	  pop();
	}
  
	// Draw minute rectangles
	for (let i = 0; i < 60; i++) {
	  push();
	  rotate(i * angleIncrementMin);
	  if (i == m) {
		fill(0);
	  } else {
		fill(255);
	  }
	  rect(0, -height / 2 + 20 + secondRectLength + 10, 1, minuteRectLength); // Adjusted length
	  pop();
	}
  
	// Draw hour rectangles
	for (let i = 0; i < 12; i++) {
	  push();
	  rotate(i * angleIncrementHour);
	  if (i == h % 12) {
		fill(0);
	  } else {
		fill(255);
	  }
	  rect(0, -height / 2 + 20 + secondRectLength + minuteRectLength + 30, 1, hourRectLength); // Adjusted length
	  pop();
	}
  }
  