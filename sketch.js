
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var paperBall;
var bin1, bin2, bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(600,height,1200,20); 
	paperBall = new Ball(500,200,50,50);
  //bin1= new Bin(800,200,50,50);
  bin1 = new Bin(900,700,10,60)
  bin2 = new Bin(750,700,10,60)
  bin3 = new Bin(830,700,width,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  ground.display();
  paperBall.display();
  //bin1.display();
 bin1.display();
 bin2.display();
 bin3.display(); 
bin1.shapeColor="red"

}

function keyPressed (){
	if( keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
	}
}


