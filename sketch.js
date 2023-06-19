var girl, girlRunning, girlImage;
var coins, coinsImg;
var ground, groundImage;
var obstacle, obstacleImage;
var score;
var gameState = "play"

function preload(){
  girlImage = loadImage("g1.png");
  groundImage = loadImage("aw.jpg");
  obstacleImage = loadImage("ob.png");
  coinsImg = loadImage("coin.jpg");
  girlRunning = loadImage("g1.png", "g2.png", "g3.png", "g4.png", "g5.png");
}

function setup() {
  createCanvas(600, 600);
  ground = createSprite(300,300);
  ground.addImage("ground", groundImage);
  ground.velocityX = -1;
  girl = createSprite(100, 400, 50, 50);
  girl.scale = 0.3;
  girl.addImage("girl", girlImage);
  obstaclesGroup = new Group();
  }


function draw() {
  background(200);
  if (gameState === "play"){
    if (keyDown("space")){
      girl.velocityY = -5;
      girl.setAnimation("running", girlRunning)
    }
    girl.velocityY = girl.velocityY + 0.8;
    if(ground.x > 0){
      ground.x = 300;
    }
    spawnDoors();
    if (obstaclesGroup.isTouching(girl)){
      ground.velocityX = 0;
      gameState === "end";
    }
    drawSprites();8
  if (gameState === "end"){
    stroke("blue");
    fill("magenta");
    textSize(50);
    text("😈GAME OVERRRRR😈", 230, 250);
  }
}
function spawnobstacles(){
  if (frameCount %80 === 0){
    obstacle = createSprite(200, -50);
    obstacle.height = 2;
    obstacle.addImage.addImage(obstacleImage);
    obstacle.lifeTime = 800;
    obstaclesGroup.add(obstacle);
  }
}
}