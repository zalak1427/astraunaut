// const Engine=Matter.Engine;
// const World=Matter.World;
// const Body=Matter.Body;
// const Bodies=Matter.Bodies;


var body,world,engne,bodies;
var astro,Back;
var bathImg,SleepImg,DrinkImg,BrushImg,EatImg,GymImg,MoveImg,BackImg;
var edge1,edge2,edge3,edge4;
var edges;


function setup() {
  createCanvas(600,460);
  

// edge1=createSprite(0,10,50,1200);
// edge1.visible=false;

// edge2=createSprite(200,459,1200,50);
// edge2.visible=false;

// edge3=createSprite(600,10,50,1200);
// edge3.visible=false;

// edge4=createSprite(200,0,1200,50);
// edge4.visible=false;

bathImg=loadAnimation("bath1.png","bath2.png");
SleepImg=loadAnimation("sleep.png");
DrinkImg=loadAnimation("drink1.png","drink2.png");
BrushImg=loadImage("brush.png");
EatImg=loadAnimation("eat1.png","eat2.png");
GymImg=loadAnimation("gym1.png","gym2.png");
MoveImg=loadAnimation("move.png","move1.png","move.png","move1.png");
BackImg=loadImage("iss.png");

 
astro=createSprite(300,230);
astro.addAnimation("sleeping",SleepImg);

astro.scale=0.1;
}

function draw() {
  background(BackImg);  
  edges=createEdgeSprites();

 



  if(keyDown("UP_ARROW")){
    astro.addAnimation("brushing",BrushImg);
    astro.changeAnimation("brushing");
    astro.y=350;
    astro.x=200;
    astro.velocityx=0;
    astro.velocityy=0;

  }

  if(keyDown("DOWN_ARROW")){
    astro.addAnimation("gymming",GymImg);
    astro.changeAnimation("gymming");
    astro.y=350;
    astro.x=300;
    astro.velocityX=0;
    astro.velocityY=0;

  }

  if(keyDown("LEFT_ARROW")){
    astro.addAnimation("eating",EatImg);
    astro.changeAnimation("eating");
    astro.y=350;
    astro.x=300;
    astro.velocityX=0;
    astro.velocityY=0;

  }

  if(keyDown("RIGHT_ARROW")){
    astro.addAnimation("bathing",bathImg);
    astro.changeAnimation("bathing");
    astro.y=350;
    astro.x=300;
    astro.velocityX=0;
    astro.velocityY=0;

  }


  if(keyDown("m")){
    astro.addAnimation("Moveing",MoveImg);
    astro.changeAnimation("Moveing");
    astro.y=350;
    astro.x=300;
    astro.velocityX=3;
    astro.velocityY=3;
    
    
  }

  
 
  astro.bounceOff(edges);
  






  
  
  drawSprites();
  
  fill("white");
  text("INSTRUCTIONS:  ",10,20);
  text("Up Arrow = Brushing",10,42);
  text("Down Arrow = Gymming",10,53);
  text("Left Arrow = Eating",10,65);
  text("Right Arrow = Bathing",10,77);
  text("M Key = Moveing",10,89);
}