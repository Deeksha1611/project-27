class BOB {
    constructor(x, y, w) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':1,
          
      }
      this.body = Bodies.circle(x, y, w, options);
      this.radius = w;
  
      World.add(world, this.body);
    }
    display(){
        fill("darkblue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    
    }
  }
  