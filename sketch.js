var issImage, backgroundImage, spacecraft1Image, spacecraft2Image;
var spacecraft3Image, spacecraft4Image;
var iss, spacecraft;
var  hasDocked=false;
var bg;





function preload(){
issImage= loadImage("iss.png");
backgroundImage= loadImage("spacebg.jpg");
spacecraft1Image= loadImage("spacecraft1.png");
spacecraft2Image= loadImage("spacecraft2.png");
spacecraft3Image= loadImage("spacecraft3.png");
spacecraft4Image= loadImage("spacecraft4.png");
}



function setup() {
  createCanvas(800,400);
  iss=createSprite(330, 130, 50, 50);
  iss.addImage("abc",issImage);
  iss.scale=0.25;

  spacecraft=createSprite(285, 240, 60, 100)
  spacecraft.addImage(spacecraft1Image);
  spacecraft.scale=0.15;
}

function draw() {
  background(backgroundImage);
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+Math.random(-1, 1);
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3Image);
      spacecraft.x=spacecraft.x-1;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft4Image);
      spacecraft.x=spacecraft.x+1;
    }

    if(keyDown("UP_ARROW")){
      //spacecraft.addImage(spacecraft2Image);
      spacecraft.y=spacecraft.y-2;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft1Image);
      //spacecraft.y=spacecraft.y+2;
    }
  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked= true;
    textSize(30);
    fill("yellow");
    text("Docking Successful",350, 300)
  }

  
  drawSprites();
}