class Ball{
     constructor(x,y){
          var options = {
               isStatic:false,
               'restitution':0.8,
               'friction':1.5,
               'density':1.2
           }
     this.ball = Bodies.rectangle(x,y,30,30,options)
     this.width=30;
     this.height=30;

     World.add(world,this.ball)
     }
     display(){
          var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("green")
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
     }

};