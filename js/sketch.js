const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj, groundObject, launcherObject;
var world, engine;
var boy;

function preload() {
	boy = loadImage("boy.png");
}

function setup() {
	var canvas = createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100, 100, 30);
	mango2 = new mango(970, 130, 30);
	mango3 = new mango(1050, 200, 30);
	mango4 = new mango(1200, 200, 30);
	mango5 = new mango(892, 163, 25);
	mango6 = new mango(980, 250, 30);
	mango7 = new mango(1140, 250, 30);
	mango8 = new mango(1020, 73, 30);
	mango9 = new mango(900, 230, 25);
	mango10 = new mango(1117, 180, 23);
	mango11 = new mango(1195, 130, 26);

	treeObj = new tree(1050, 580);
	groundObject = new ground(width/2, 600, width, 20);
	stoneObj = new Stone(235, 420, 30);

	launcherObject = new Slingshot(stoneObj.body, {x : 235, y : 420});
	Engine.run(engine);
}

function draw() {
  background(230);

  push();
  stroke(0);
  strokeWeight(6);
  fill(255);
  textFont("algerian");
  textSize(30);
  text("Prees 'Space' to get a second chance to play!!", 80, 100);
  pop();

  image(boy , 200, 340, 200, 300);

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  groundObject.display();
  stoneObj.display();
  launcherObject.display();

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  detectCollision(stoneObj, mango9);
  detectCollision(stoneObj, mango10);
  detectCollision(stoneObj, mango11);
}

function mouseDragged(){
   Matter.Body.setPosition(stoneObj.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stoneObj.body, {x : 235, y : 420});
    launcherObject.attach(stoneObj.body);
  }
}
function detectCollision(lstone, lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if (distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }
}