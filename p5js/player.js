class Player{
  constructor(x, y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    // Speed multiplier
    // this.vel.mult(random(2));
  }
  move() {
    // this.acc = p5.Vector.random2D();
    // this.acc.setMag(0.01);
    // this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  show(){
    stroke(255);
    strokeWeight(2);
    fill(255,0,0);
    ellipse(this.pos.x, this.pos.y, 40);
  }

}