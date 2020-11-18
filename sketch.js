
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var paperObject;
//var groundSprite;

function preload()
{
	binImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("RED");

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, height-35, width,10,{isStatic:true});
	World.add(world, ground);
	//Create the Bodies Here.

	bin = createSprite(1000,575,20,20);
	//1000
	bin.addImage(binImg);
	bin.scale = 0.51;


	dustbin1 = new Dustbin(1000,655,100,15);
	dustbin2 = new Dustbin(942,571,15,160);
	dustbin3 = new Dustbin(1058,571,15,160);
	paperObject = new Paper(200,450,55);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  paperObject.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:147,y:-150});
	}
}



