//Create variables here
var dog;
var dogHappy;
var database;
var foodS;
var foodStock
var dogImage;
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale=0.5;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);

  drawSprites();
  //add styles here

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
function readStock(data){
foodS=data.val();
}