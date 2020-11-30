var helicopterImg, helicopter, package,packageImg;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterImg = loadImage("helicopter.png");
	packageImg = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package = createSprite(400, 80, 10,10);
	package.addImage(packageImg);
	package.scale = 0.2;

	helicopter = createSprite(400, 200, 10,10);
	helicopter.addImage(helicopterImg);
	helicopter.scale = 0.6;

	ground = createSprite(400, 670, 800,10);
	ground.shapeColor = "white";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400, 200 , 5, {restitution:0.8});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);

	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
 
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}

