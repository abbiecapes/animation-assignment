function setup() {
  createCanvas(1280, 657);
}

function draw() {
  background(150, 0, 0);
  function setup() {
    createCanvas(100, 100, WEBGL);
  }
  // Draw a rectangle with rounded corners, each having a radius of 5. (where it is on screen, "", how big it is, "", corners)
rect(20, 50, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
let rectX = 0;
let fr = 30; //starting FPS
let clr;

function setup() {
  background(200);
  frameRate(fr); // Attempt to refresh at starting FPS
  clr = color(255, 0, 0);
}

function draw() {
  background(200);
  rectX += 1; // Move Rectangle

  if (rectX >= width) {
   // If you go off screen.
    if (fr === 30) {
      clr = color(0, 0, 255);
      fr = 10;
      frameRate(fr); // make frameRate 10 FPS
    } else {
      clr = color(255, 0, 0);a
      fr = 30;
      frameRate(fr); // make frameRate 30 FPS
    }
    rectX = 0;
  }
  fill(clr);
  rect(rectX, 40, 20, 20);
}
rect(120, 100, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(220, 80, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(320, 80, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(420, 100, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(520, 120, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(620, 60, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(20, 200, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(120, 250, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(220, 230, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(320, 230, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(420, 250, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(520, 270, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
// Draw a rectangle with rounded corners, each having a radius of 20.
rect(620, 210, 90, 140, 5);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
}