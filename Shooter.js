class Hexagon {
    constructor(x,y,radius) {
      var options = {
        'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.radius = radius;
      this.body = Bodies.circle(x, y,radius,options);
      World.add(world, this.body);
      this.image = loadImage("polygon.png");
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,0,0,this.radius*2,this.radius*2);
      pop();
    }
  }