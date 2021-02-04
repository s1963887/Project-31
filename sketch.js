const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops = [];

var rand;

function preload(){
    
}

function setup(){
   createCanvas(750, 700);
    
    engine = Engine.create();
	world = engine.world;

    if(frameCount % 150 === 0){
    
        for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(10,700), random(10,650)));
        }
    }

}

function draw(){
    background(0);
    Engine.update(engine);
for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].updateY();
}

drawSprites();

}   



  
