var cat1,cat2,cat3,tom;
var mouse1,mouse2,mouse3,jerry;
var garden;
function preload(){
    cat1=loadImage("images/cat1.png");
    cat2=loadImage("images/cat2.png","images/cat3.png");
    cat3=loadImage("images/cat4.png");
    garden=loadImage("images/garden.png");
    mouse1=loadImage("images/mouse1.png");
    mouse2=loadImage("images/mouse2.png","images/mouse3.png");
    mouse3=loadImage("images/mouse4.png");
}
    //load the images here


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,600);
    tom.addAnimation("tomstanding",cat1);
    tom.scale=0.2
    jerry=createSprite(200,600);
    jerry.addAnimation("jerrystanding",mouse1);
    jerry.scale=0.2

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width/2)){
        tom.velocityX=0;
        tom.addAnimation("tomstop",cat3);
        tom.changeAnimation("tomstop");
        

        jerry.addAnimation("jerrystop",mouse3);
        jerry.changeAnimation("jerrystop");
        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      jerry.addAnimation("jerryteasing",mouse2);
      jerry.frameDelay=25
      jerry.changeAnimation("jerryteasing");

      tom.velocityX=-3;
      tom.addAnimation("tommoving",cat2);
      tom.changeAnimation("tommoving");
     
  }


}
