
var  monkey;
var banana ,bananaImage, obstacleImage
var score
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var SOUNDING , last;


function preload(){
  
  
  monkey =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  SOUNDING = loadSound("BG.mp3")
  last = loadSound("END.mp3")
}



function setup() {
  createCanvas(600,600)
  
  SOUNDING.loop();
  
  themonkey = createSprite(57,349,10,10)
  themonkey.addAnimation("go",monkey)
  themonkey.scale=0.18;
  
  ground = createSprite(1,407,1500,10)
  ground.velocityX=-4;
  
  valaiGroup = createGroup();
  denGroup = createGroup();
  
   score = 0;
  
}


function draw() {

  background("white")
  
  
  if(gameState===PLAY){
     
    text("Survival Time : " + score , 277,17)
    
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  score = score + Math.round(getFrameRate()/61);
    
    if(score>0 && score%100 === 0){
       
    }
    score = score + Math.round(getFrameRate()/120);
    
    
    
    
    
    
    if(score>0 && score%1000 === 0){
       
    }
    

    
     denGroup.velocityX = -(3+ score/100);
    
    
    
   themonkey.velocityY = themonkey.velocityY + 0.8
  
  if(keyDown("space")&&themonkey.y >=170){
    
    themonkey.velocityY=-3;
    
  }
  
  yellow();
  
    if(valaiGroup.isTouching(themonkey)){
      
      valaiGroup.destroyEach();
      
    }
    themonkey.visible = true;
    denGroup.visible = true;
    valaiGroup.visible = true;
      
  ROCK();
  
    if(themonkey.isTouching (denGroup)){
      
      gameState = END
      
    }
    
     
     }
  
  
  else if(gameState===END){
    
          background("black")
          stroke ("yellow") 
          fill("yellow")
          textSize(30);
          text("POOR MONKEY 😢😢",200,200)  
          themonkey.visible = false;
          denGroup.visible = false;
          valaiGroup.visible = false;
          score.visible= true;
          
          }
  
      themonkey.collide(ground)
      drawSprites();
}


function ROCK(){
  
   if(frameCount % 200===0){
     
     kallu = createSprite(600,365,10,10);
     kallu.addImage(obstacleImage)
     kallu.scale=0.25;
     kallu.velocityX=-2;
     denGroup.add(kallu);
   }
  
   
  
  
}

function yellow(){
  
  
  
   if(frameCount % 300===0){
   valai = createSprite(600,200,10,10)
   valai.addImage(bananaImage);
   valai.scale=0.1;
   valai.velocityX=-2;  
   valaiGroup.add(valai)
   }
  
}

