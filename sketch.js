var fixedRect, movingRect;
var object1,object2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object1=createSprite(800,500,100,10)
object2=createSprite(200,500,50,20)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 // object1.velocityX=-5.5
  object2.velocityX=-2
  if(isTouching(object1,object2)){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }

bounceoff(object1,object2)


  drawSprites();
}
function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
 return true
}
else {

  return false 
}
function bounceoff(movingRect,fixedRect){
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
    {
     // movingRect.velocityX=movingRect.velocityX-2*movingRect.velocityX
      fixedRect.velocityX=fixedRect.velocityX-2*fixedRect.velocityX
      console.log("hello")
    }
if(  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.velocityY=fixedRect.velocityY-2*fixedRect.velocityY
   // movingRect.velocityY=movingRect.velocityY-2*movingRect.velocityY
  }



}




}