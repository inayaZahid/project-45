const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var  bubbles=[];
var back,backImg;
function preload(){
  backImg=loadImage("rainbow background.jpg")
}
function setup() {
 createCanvas(displayWidth,displayHeight)
 engine = Engine.create();
  world = engine.world;
  back = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  back.addImage(backImg)
  back.scale=5

}

function draw() {
  fill("black");
  textSize(24);
  text("Bubble Pop Antistress game",displayWidth/2,20);
  text("this is balloon pop game ",50,50);
  text("in the next part of this game player can pop the bubbles",50,125);
  background("pink");  
 
 
  drawSprites();
  if(frameCount%60===0){
    bubbles.push(new Buble(random(0,displayWidth),10,100));
  }
  for(var h = 0;h<bubbles.length;h++){
    bubbles[h].display();
  }
  Engine.update(engine);
}
