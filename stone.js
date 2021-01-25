class Stone extends BaseClass {
    constructor(x, y, width, height){
      var options = {
        'restitution':0.1,
        'friction':0.1,
        'density':0.1
    }
      super(x,y,120,120);
      this.image = loadImage("stone.png");
    }
  
  };