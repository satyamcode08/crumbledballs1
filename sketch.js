var rect1, rect2, rect3
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ballSprite=createSprite(150, 630, 30,30);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1=createSprite(600,height-49,100,10);
	rect1b = Bodies.rectangle(600,height-49,200,10, {restitution:0.8,isStatic:true} );
	 World.add(world, rect1b);
	rect2=createSprite(550,height-95,10,100);
	rect2b = Bodies.rectangle(550,height-95,10,100 , {restitution:0.8,isStatic:true} );
 	World.add(world, rect2b);
	rect3=createSprite(650,height-95,10,100);
	rect3b = Bodies.rectangle(650,height-95,10,100, {restitution:0.8,isStatic:true} );
 	World.add(world, rect3b);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 ballb = Bodies.rectangle(150, 630, 30,30, {restitution:0.8,isStatic:false} );
	 World.add(world, ballb);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  drawSprites();
 
}
function keypressed(){
	if(keyDown(UP_ARROW)){
      Matter.body.applyForce(ball.body,ball.body.position,{x:85,y:85})
	}
}


