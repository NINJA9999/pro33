const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow2 = []
var backgroundImg;

function preload(){
  bg=loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,590,1400,10)
 
}

function draw() {
  background(bg);
  Engine.update(engine)
  if(frameCount%20 === 0){
    snow2.push(new Snow(random(100,1200), 10))
  }
  for(var i = 0; i < snow2.length; i++){               
    snow2[i].display()
  }
  ground.display();
}