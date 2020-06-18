var ball;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boxPosition=width/2-100
 	boxY=610;

	dustbinLeftSprite = createSprite(boxPosition, boxY, 20,100);
	dustbinLeftSprite.shapeColor=color(255,0,0);

 	dustbinLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, dustbinLeftBody);

 	dustbinBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	dustbinBase.shapeColor=color(255,0,0);

 	dustbinBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, dustbinBottomBody);

 	dustbinleftSprite = createSprite(boxPosition+200 , boxY, 20,100);
 	dustbinleftSprite.shapeColor=color(255,0,0);

 	dustbinRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, dustbinRightBody);
 
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  
  drawSprites();
 
}



