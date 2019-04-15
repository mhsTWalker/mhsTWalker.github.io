function setup() {
  // put setup code here


createCanvas (1250,877);

}


function draw() {
  // put drawing code here

  // mouseX and mouseY

  strokeWeight(3);
  stroke(57, 0, 214);
  fill(0, 210, 247);
  background(170, 37, 106);


  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 50, 50);
  } else {
    rect(mouseX, mouseY, 50, 50);
  }

  print(mouseIsPressed);
}
