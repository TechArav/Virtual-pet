//Create variables here
var dog1,dog,dogHappy;
var food=20;
function preload()
{
  //load images here
  
  dog1=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,350,50,50)
}


function draw() {  
  background(green)

 
  noStroke();
  textSize(35)
  fill("black")
  text("Food Left = 20" + food , width-300, 50)
 
  dog.addImage(dog1)
  if(keyDown(UP_ARROW)){
    dog.addImage(dogHappy)
    food=food-1;
  }


  drawSprites();
  //add styles here

}



