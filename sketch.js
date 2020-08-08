var fixedRect,movingRect,extra;
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(100, 200, 50, 50);
movingRect= createSprite(200, 200, 50, 50);
  extra=createSprite(50,50,150,200);
fixedRect.shapeColor="orange";
movingRect.shapeColor="orange";
extra.shapeColor="lightblue";
}

function draw() {
  background("black"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  drawSprites();
}
