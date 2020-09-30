//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg,happyDogImg;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  // foodStock=database.ref("food");
  // foodStock.on("value",readStock);
  database.ref("food").on ("value", readStock);
  happyDog=createSprite(250,250);
 happyDog.addImage(dogImg);
 happyDog.scale=0.2;
  // dog.addImage(dogImg);

}


function draw() { 
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    foodS-=1
    happyDog.addImage(happyDogImg);
    happyDog.scale=0.2;
  }

  drawSprites();
  fill ("white")
  text ("Note : Press UP_ARROW Key to feed the Drago milk" ,100,40);
  text("Remaining Food " + foodS, 100,80)
  //add styles here

}

function readStock(data){
  foodS=data.val();
  console.log(foodS)

}

function writeStock(x){
  database.ref("/").update({
    food:x})
}



