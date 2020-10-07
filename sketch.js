//Create variables here
var dog;
var happyDog;
var satabase;
var foodS; 
var FoodStock;
var database;

function preload()
{
  dog1=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png")
  //load images here
}

function setup() {
	createCanvas(500, 500);
   database=firebase.database();
   FoodStock=database.ref("Food");
   FoodStock.on("value",readStock,showerror);
   dog=createSprite(200,200,10,10);
   dog.addImage(dog1);
   dog.scale=0.5;
}


function draw() {  
  background(46,139,87);
  drawSprites();
  //add styles here
  textSize(30);
  fill("black");
  text("Press up to feed dog",120,100);
  stroke(2);
}
function readStock(data){
  dogDB=data.val;
  Food=dogDB.Food;
}

function showerror(){
  console.log("Hi");
}
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}