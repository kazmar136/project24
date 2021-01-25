
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;
var engine, world;
var ground1,hammer1;
var rubber1,stone1;
var sand1,sand2,sand3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,height,800,20)
    hammer1 = new Hammer(10,10)
	sand1 = new Sand(349,350);
	sand2 = new Sand(400,650);
	sand3 = new Sand(400,600)
	rubber1 = new Rubber(150,400);
	stone1 = new Stone(600,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(185);
   
  ground1.display();
  hammer1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  rubber1.display();
  stone1.display();

}



