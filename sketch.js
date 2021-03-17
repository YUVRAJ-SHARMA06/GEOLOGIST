const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground = new ground (400,680,800,30)
    hammer=new hammer(200,200,100,30)
    rubber=new rubber(200,200,20)
    stone=new stone(300,100,100,100)
    iron=new iron(500,10,130,130)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ground.display()
  hammer.display()
  rubber.display()
  stone.display()
  iron.display()
  

  drawSprites();
 
}