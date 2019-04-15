let x1 = 0;
let x2 = 600;
let y =300;
let size = 50;

let x1Speed = 5;
let x2Speed = 5;

//Assume objects have not collided
let hit = false;

function setup() {
  // put setup code here
  createCanvas(1280,877);
  textSize(height - 700);
    textAlign(CENTER, CENTER);
}

function draw() {
  // put drawing code here
 //Check for collision
  hit = collideRectRect(x1,y,size,size,x2,y,size,size);

  //Output a statement to console
  print(hit);

  //If collision, game over
  if (hit){
  background(255,0,0)
  text('game over', 600, 389);
fill(0, 102, 153);
text('game over', 600, 400);
fill(0, 102, 153, 51);
text('game over', 600, 420);


}

else {
  background(0)
  fill(127)
  rect(x1,y,size,size);

  fill(255)
  rect(x2,y,size,size);

  x1+=x1Speed;
  x2+=x2Speed;


if (x1>width || x1<0){

x1Speed*=-1;

}

if (x2>width || x2<0){

x2Speed*=-1;

}
  }
}
