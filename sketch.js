
var car,wall,CARi;
var red1,green1,yello1;
var redc,yelloc,greenc;
var speed,weight;

function preload(){
  CARi=loadImage("car_black.png");
  red1=loadImage("car_red.png");
  green1=loadImage("car_green.png");
  yello1=loadImage("car_yellow.png");
}


function setup() {
  createCanvas(800,400);
  
  speed=random(20,40);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  
  wall=createSprite(600,200,60,height/2);
  wall.shapeColor="red";
  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  
  
  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed / 22509;

    if(deformation>180)
    {
    
      (car).shapeColor=color(255,0,0) ;
      
    }

   if(deformation<180 && deformation >100)
   {

    (car).shapeColor=color(230,230,0) ;

   }

   if(deformation<100)
   {

    (car).shapeColor=color(0,255,0) ;

   }

  }


  drawSprites();
}