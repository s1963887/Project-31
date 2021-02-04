class Drop {
    constructor(x,y) {
      var options = {
          restitution:0.00001,
          friction:1
      }

      this.rain = Bodies.circle(x,y,10,options);
      this.radius = 8;
      

      World.add(world, this.rain);
    }

    updateY(){
      if(this.rain.position.y > height){
        Body.setPosition(this.rain, {x:random(10,700), y:random(10, 650)});
      }
    }

    display(){
      strokeWeight(1)
      
      fill("blue");
      ellipseMode(CENTER);
      ellipse(this.rain.position.x,this.rain.position.y,10);
      
      }
    }
  