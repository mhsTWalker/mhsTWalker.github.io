//Global Variables
let x = 100;
let y = 100;

let img;

let x1 = 0;
let x2 = 600;
let x1Speed = 5;
let x2Speed = 5;

let xSpeed = 5;
let ySpeed = 5;

let size = 100;

let hit = false;

var  mouseX;
var  mouseY;

//paddle variables

var paddleWidth = 5;

var paddleHeight = 20;



var distWall = 15;



var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;


function preload() {
  //Assign the image file to the variable
  img = loadImage('Space');


}

function setup() {
  // put setup code here
  createCanvas(1280,877);
//  bg = loadImage('Tagan - ICS2O/space.jpg');
  frameRate(50); //30 frames per second

}

function draw() {
// put drawing code here

/*--------------------start instructions--------------------*/
  if (level ===0) {
    //Show the instructions to the user
    background(img);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('Galatica', width/2, height/2);

    textSize(16);
    text('Fight against your opponent \nUse A & D or th left and right arrow key to move your lightsaber. ', width/2, height/2+50);
    text('Press space to start', width/2, height/2+100);

    //If they press enter, move to the next level (game)
    if (keyIsDown(SPACE)) {
      level+=1;
    }
  }
  /*--------------------instructions end--------------------*/

  /*--------------------game start--------------------*/
  else if (level ===1) {

  // Draw the paddle

  fill(153);

  rect(width-distWall, yPaddle, paddleWidth, paddleHeight);


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

else{
  background(bg)
  //draw
  fill(7, 226, 255);
  ellipse(200,200,100,100);
  point(mouseX,mouseY);

  	hit = collidePointCircle(mouseX,mouseY,200,200,100)

  	print("colliding? " + hit);

  }

  x1+=x1Speed;
  x2+=x2Speed;


  //move the rectangle
  x = x+xSpeed;
  y = y+ySpeed;

  //if it reaches the bottom, change diection
if (y+size>=height || y<=0) {
  ySpeed = ySpeed* (-1);

  }

  //if it reaches the top, change diection
else if (y<=0){
  ySpeed = ySpeed* (-1);

      }

  //if it reaches the right, change direction
if (x+size>=width || x<=0){
  xSpeed = xSpeed* (-1);

    }

  //if it reaches left, change direction
else if (x<=0){
  xSpeed = xSpeed* (-1);

      }
  }

  //If the user leaves the screen, they win so move on to the next level (win)
  if (x>width || x<0 || y>height || y<0) {
    level+=1
  }
}
/*--------------------end game--------------------*/

/*--------------------winning screen--------------------*/
 else if (level===2) {
  //Change the backround and inform the user that they won
  background(0,255,0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text('YOU WIN!', width/2, height/2);
  textSize(16);
  text('Press space to play again', width/2, height/2+50);

  //If the user presses enter, reset the x and y value and reset the level to level 1 (game)
  if (keyIsDown(SPACE)) {
    x=width/2;
    y=height/2;
    level=1;
  }
}
/*--------------------end winning screen--------------------*/
