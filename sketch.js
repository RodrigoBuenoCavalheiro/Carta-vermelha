function setup() {
  background("white")
  createCanvas(400, 400);
}

function draw() {
  stroke("blue");
  fill("red");
  random()
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }   
}
