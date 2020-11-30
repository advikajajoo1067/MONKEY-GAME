
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground , bananaGroup , obstacleGroup
var survialTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x);
  
  bananaGroup = createGroup();
  
  obstaclesGroup = createGroup();
}


function draw() {
createCanvas(600,400);
  
background("lightblue");
  
  stroke("pink");
  textSize(20);
  fill("violet");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time :"+ survivalTime,100,50 );
  
  if(keyDown("space")) {
        monkey.velocityY = -12;
            }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/3;
    }
  
  food();
  Obstacles();
  
drawSprites();
}

function food(){
  if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
  banana.y = Math.round(random(80,150));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=300;
    bananaGroup.add(banana);
  }
}

function Obstacles(){
 if (frameCount % 80 === 0){
   var obstacle = createSprite(600,310,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    }         
}





