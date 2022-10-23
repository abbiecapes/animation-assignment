function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);
  function setup() {
    createCanvas(100, 100, WEBGL);
  }
  
    rect(200, 200, 40, 50)
    background(200);
    //rotateZ(radians(rotationZ));
    rotateX(radians(rotationX));
    //rotateY(radians(rotationY));
    box(200, 200, 200);
    describe(`red horizontal line right, green vertical line bottom.
      black background.`);
  }
  let value = 0;
 
    fill(value);
    rect(25, 25, 50, 50);
    describe(`black 50-by-50 rect turns lighter with mouse click and
      drag until white, resets`);
  function mouseDragged() {
    value = value + 5;
    if (value > 255) {
      value = 0;
    }
  }
  

