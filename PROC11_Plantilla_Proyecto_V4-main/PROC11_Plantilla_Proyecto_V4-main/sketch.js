var nave
var sea 



function preload(){
  spriteName.addImage(seaImg)
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png, ship-2.png")
  if(keyDown(RIGHT_ARROW)){
    nave.velocityX=2
    nave.velocityY=0
  }
  if(keyDown(LEFT_ARROW)){
    nave.velocityX=-2
    nave.velocityY=0
  }
  if(keyDown(UP_ARROW)){
    nave.velocityX=0
    nave.velocityY=-2
  }
  if(keyDown(DOWN_ARROW)){
    nave.velocityX=0
    nave.velocityY=2
  }
  if(sea.x<0){
    sea.x=sea.width/2
  }
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
}