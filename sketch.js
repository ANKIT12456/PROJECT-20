var redcar,greencar,yellowcar,blackcar;
var car,wall;
var speed,weight;
function preload(){
   redcar=loadImage("2.png");
   greencar=loadImage("3.png");
   yellowcar=loadImage("4.png");
   blackcar=loadImage("1.png");
}
function setup() {
  createCanvas(1000,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,900));
  car=createSprite(60,200,50,50);
  car.addImage(blackcar);
  car.scale=0.7;
  car.velocityX=speed;
  wall=createSprite(900, 200, 40, height/2);
}

function draw() {
  background("blue");
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    console.log(deformation);
    if(deformation>180){
      car.addImage(redcar);
    }
    if(deformation>100 && deformation<180){
      car.addImage(yellowcar);
    }
    if(deformation<100){
      car.addImage(greencar);
    }
  }  
  drawSprites();
}