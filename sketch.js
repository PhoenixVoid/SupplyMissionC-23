var helicopterSprite, helicopterImg;
var packageBody, packageSprite, packageImg, package;
var ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){

	helicopterImg = loadImage("helicopter.png");
	packageImg = loadImage("package.png");

}

function setup(){
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	helicopterSprite = createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterImg);
	helicopterSprite.scale = 1;

	package = new Package(width/2, 200);

	ground = createSprite(width/2, height-1, width, 10);
	ground.shapeColor = color(255);

	box1 = new Box(400, 590, 200, 20);
	
	box2 = new Box(285, 585, 20, 100);

	box3 = new Box(515, 585, 20, 100);

	//package = Bodies.circle(width/2, 200, 5, {restitution:3, isStatic:true})
	//World.add(world, package);

	//packageBody = Bodies.circle(width/2, 200, 5, {restitution : 3, isStatic : true});
	//World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//package.x = packageBody.position.x;
	//package.y = packageBody.position.y;

}

function draw(){
	rectMode(CENTER);
	background(0);

	Engine.update(engine);

	package.display();
	
	box1.display();
	box2.display();
	box3.display();

	//drawSprites();
}

function keyPressed(){
	if(keyCode == DOWN_ARROW){
		
		//package.isStatic(false);
		Matter.Body.setStatic(package, false);
		
	}	

}