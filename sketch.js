function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}let stars = []; // Almacena las estrellas

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  // Dibuja todas las estrellas existentes
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
}

function mouseClicked() {
  // Crea 3 estrellas y añádelas al arreglo
  for (let i = 0; i < 3; i++) {
    let x = mouseX; // La posición X es la misma donde se hizo clic
    let y = mouseY; // La posición Y es la misma donde se hizo clic
    let speedX = random(-5, 5); // Velocidad inicial en X aleatoria
    let speedY = random(-5, 5); // Velocidad inicial en Y aleatoria
    let size = random(10, 30); // Tamaño aleatorio para las estrellas
    let star = new Star(x, y, speedX, speedY, size);
    stars.push(star);
  }
}

class Star {
  constructor(x, y, speedX, speedY, size) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Limita la velocidad para que no sean muy rápidas
    this.speedX *= 0.95;
    this.speedY *= 0.95;
  }

  display() {
    fill(255); // Cambia el color de relleno a blanco
    noStroke();
    
    // Dibuja una estrella como líneas
    let angle = TWO_PI / 5;
    let halfSize = this.size / 2;
    beginShape();
    for (let i = 0; i < 5; i++) {
      let xVertex = this.x + cos(angle * i) * halfSize;
      let yVertex = this.y + sin(angle * i) * halfSize;
      vertex(xVertex, yVertex);
      xVertex = this.x + cos(angle * i + HALF_PI) * (halfSize / 2);
      yVertex = this.y + sin(angle * i + HALF_PI) * (halfSize / 2);
      vertex(xVertex, yVertex);
    }
    endShape(CLOSE);
  }
}
