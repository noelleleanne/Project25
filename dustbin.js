class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("dustbin.png");
      World.add(world, this.body);
    }
    display(){
      push();
      translate();
      var pos =this.body.position;
      //imageMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };