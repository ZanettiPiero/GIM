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
  
	// Codice per disegnare i rettangoli ruotati
	translate(width / 2, height / 2);  // Trasla l'origine al centro della finestra
  
	let angleIncrement = TWO_PI / 60;  // Incremento angolare per ogni rettangolo del primo gruppo
	let angleIncrementMin = TWO_PI / 60; // Incremento angolare per ogni rettangolo del secondo gruppo
	let angleIncrementHour = TWO_PI / 12; // Incremento angolare per ogni rettangolo del terzo gruppo
  
	// Primo gruppo di rettangoli
	push();
	rotate(s * angleIncrement);  // Ruota di un angolo pari ai secondi attuali
	rect(0, -400, 5, 20);        
	pop();
  
	// Secondo gruppo di rettangoli
	push();
	rotate(m * angleIncrementMin);  // Ruota di un angolo pari ai minuti attuali
	rect(0, -350, 15, 100);                  
	pop();
  
	// Terzo gruppo di rettangoli
	push();
	rotate(h % 12 * angleIncrementHour);  // Ruota di un angolo pari alle ore attuali, considerando solo le 12 ore
	rect(0, 50, 45, 175);                  
	pop();
  }
  