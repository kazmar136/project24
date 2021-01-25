class Hammer extends BaseClass {
  constructor(x,y){
    var options = {
      'restitution':3,
      'friction':1,
      'density':0.5
  }
    super(x,y,100,100);
    this.image = loadImage("hammer.png");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}
