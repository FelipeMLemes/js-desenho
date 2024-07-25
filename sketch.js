function setup() {
    createCanvas(900, 900);
  background("black")
  }
  
  function draw() {
  stroke("white");
    fill("white");
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 40, 40)
  }
  
  }
  
  
  
  