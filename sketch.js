var fixed,moving;




function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="red";
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="red";
}


function draw() {
  background("black");
  moving.x=World.mouseX;
  moving.y=World.mouseY;  
  drawSprites();
}