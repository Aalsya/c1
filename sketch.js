var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(100, 200, 50, 50);
movingRect= createSprite(200, 200, 50, 50);
fixedRect.shapeColor="orange";
movingRect.shapeColor="orange";
}

function draw() {
  background("black"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  drawSprites();
}