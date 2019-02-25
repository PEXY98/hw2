function setup() {
  createCanvas(600, 200);
}

var ball = 0;
var ballSpeed = 10;
var ballChangeX = ballSpeed;

var ball2 = 100;
var ballSpeed2 = 5;
var ballChangeX2 = ballSpeed2;

function draw() {
  background(220);
  fill(200, 200, 0);
  ellipse(width/2, ball, 100);
  ellipse(width/4, ball2, 75);
  ball = ball + ballChangeX;
  ball2 = ball2 + ballChangeX2;

  // Check if ball is off right hand side of screen
  if (ball >= height) {
    ballChangeX = -ballSpeed;
  }
  if (ball2 >= height) {
    ballChangeX2 = -ballSpeed2;
  }

  // Check if ball is off left hand side of screen
  if (ball <= 0) {
    ballChangeX = ballSpeed;
  }
  if (ball2 <= 0) {
    ballChangeX2 = ballSpeed2;
  }
}
