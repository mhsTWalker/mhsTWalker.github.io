/*
House assignment
Tagan Walker
March 18, 2019
*/


function setup() {
  // put setup code here
 //Create a canvasnew
 createCanvas(800,600);
 //Blue
 background(66, 167, 244);
}
function draw() {
  //set width of the house
  //change this variable to scale the house

  let scale = 2;
  let houseWidth = 300;


  // put drawing code here

  //chimney
  fill(84, 38, 38);
  rect(450,200,20,70);
  //Main Part of the House
  fill(232, 231, 180);
  rect(width/2,height/2,houseWidth,houseWidth/2);
  //chimney topper
  fill(84, 38, 38);
  rect(440,200,40,10);

   //Roof
   /*
   x1	float: x-coordinate of the first point
   y1	float: y-coordinate of the first point
   x2	float: x-coordinate of the second point
   y2	float: y-coordinate of the second point
   x3	float: x-coordinate of the third point
   y3	float: y-coordinate of the third point
   x1 is left vertex. x2 is middle vertex. x3 is right vertex*/
  //note:   x1    y1   x2   y2   x3   y3
  fill(183, 49, 25);
   triangle(400, 300, 550, 200, 700, 300);

  //window frame 1
  //   x   y width height
  fill(255, 255, 255);
  rect(450,350,30,30);
  //window frame 2
  fill(255, 255, 255);
  rect(610,350,30,30);


  //Ground;dirt
 //    x   y   width height
  fill(51, 31, 27);
  rect(0,439,789,200);
  //ground;grass
  fill(70, 186, 50);
  rect(0,439,789,30);
  //sun
  fill(249, 222, 14);
  ellipse(20,30,100,100);
  //tree trunk
  fill(71, 44, 38)
  rect(195,369,20,70)


  //tree leaves 12
  fill(61, 122, 53)
  ellipse(220,310,50,50)
  //tree leaves 11
  fill(61, 122, 53)
  ellipse(220,330,50,50)
  //tree leaves 1
  fill(61, 122, 53)
  ellipse(200,369,50,50)
  //tree leaves 2
  fill(61, 122, 53)
  ellipse(180,357,50,50)
  //tree leaves 3
  fill(61, 122, 53)
  ellipse(180,330,50,50)
  //tree leaves 4
  fill(61, 122, 53)
  ellipse(180,305,50,50)
  //tree leaves 5
  fill(61, 122, 53)
  ellipse(180,280,50,50)
  //tree leaves 6
  fill(61, 122, 53)
  ellipse(230,280,50,50)
  //tree leaves 7
  fill(61, 122, 53)
  ellipse(200,270,50,50)
  //tree leaves 8
  fill(61, 122, 53)
  ellipse(230,310,50,50)
  //tree leaves 9
  fill(61, 122, 53)
  ellipse(230,330,50,50)
  //tree leaves 10
  fill(61, 122, 53)
  ellipse(230,357,50,50)




  //door
  fill(25, 23, 12);
  rect(530,389,30,50);
  //doorknob
  //       x    y    width height
  fill(122, 121, 115);
  ellipse(553,415, 7, 7);

/* Remember this:   //   x1    y1   x2   y2
                   line(400, 300, 550, 200);
                   line(550,200,700,300);*/
}
