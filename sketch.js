
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var iron;
var sand = []

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(mouseX, mouseY, 125, 25);
  plane = new Plane(400, 690, 800, 20);
  stone = new Stone(400, 500);
  rubber = new Rubber(100, 500, 30);
  iron = new Iron(700, 500);
  
}


function draw() {
  background("blue");

  Engine.update(engine);

  rectMode(CENTER);

  //console.log(stone.body.angle);

  hammer.body.position.x = mouseX;
  hammer.body.position.y = mouseY;

  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();

  for(var i=0;i<4;i++){
    sand.push(new Sand(115+(i+2),500));
    sand[i].display();
  }
  
  drawSprites();
 
}