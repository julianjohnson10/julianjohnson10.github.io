let player1;
//setup happens once and only once.
function setup() {
  createCanvas(1000, 600);
  // Different panel template: for multipaneled
  // mainMenu = createGraphics(1000,600);
  // mainMenu.background(255,0,0);
  
  //Create slider
  slider1 = createSlider(0,500);
  slider1.style('width','500px');
  
  //Create player object
  player1 = new Player(width/2,height/2);
}

//Draw function runs in a loop
function draw() {
  // image(mainMenu,0,0);
  colorMode(RGB);
  let value1 = slider1.value();
  background(value1,255,20);
  player1.move();
  player1.show(value1);

}