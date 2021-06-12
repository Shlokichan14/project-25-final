const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground, paper;
var world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(120,40,20);
	ground = new Ground(600,400,1000,20);
	dustbin = new Dustbin(1000,380);

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(230); 

  ground.display();
  dustbin.display();
  paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}
