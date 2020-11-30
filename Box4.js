class Box4 {
    constructor(x,y,width,height) {
      var options = {
        'isStatic': false,
        'restitution':0.5,
        'friction':0.5,
        'density':1.2
      }
      this.Visibility = 255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3) {
        var pos =this.body.position;
      rectMode(CENTER);
      stroke(0);
      strokeWeight(4);
      fill(188,0,50);
      rect(pos.x, pos.y, this.width, this.height);
      }
      else {
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5;
        pop();
      }
     
    }

    score() {
      if(this.Visibility < 0 && this.Visibility >= -920) {
        score++;
       }
    }
    

  }

 