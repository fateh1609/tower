

var engine, world;
var a;
var circles=[];
var ground
function setup() {
  createCanvas(800,800);
  stroke(255)
  


  ground = new Ground(400, 400, 100, 1000);
  
 
  a=height;
  
}

function draw() {
 
  background("blue");  
  



  ground.display();
  
  a=a-1;
  
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}

 drawSprites();
}

