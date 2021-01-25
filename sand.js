class Sand extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      'restitution':1.3,
      'friction':5,
      'density':1
  }
    super(x,y,80,80);
    this.image = loadImage("sand.png");
  }

};