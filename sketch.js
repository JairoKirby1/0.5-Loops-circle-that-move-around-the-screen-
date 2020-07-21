va= r marcher;
var backgroundColor;
var marcherColor;

function setup() {
  createCanvas(390, 390);

  marcher = {
    x: 25,
    y: 25,
    size: 30,
    speed: 1
  };

  backgroundColor = color("lightgrey");
  marcherColor = color("purple");



}


function draw() {
  background(backgroundColor);
  marcher.x = marcher.x + marcher.speed


  // to move purple circle
  if (marcher.x > width) {
    marcher.speed = -1
  }


  // background tile
  for (var squareX = 0; squareX <= width; squareX = squareX + 30) {
    for (var squareY = 0; squareY <= height; squareY = squareY + 30) {
      fill( 20 120, 100);
      square(squareX, squareY, marcher.size);
    }
  };


  //6 dark green circles
  var cloneY = 25;
  while (cloneY < height) {
    fill(30, 50, 40);
    ellipse(marcher.x, cloneY, 30, marcher.size);
    cloneY = cloneY + 55;
  };


  stroke(75);
  fill(marcherColor);
  ellipse(marcher.x, marcher.y, marcher.size, marcher.size);
  }