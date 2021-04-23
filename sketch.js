
function preload() {
    //load the images here
    catResting = loadImage("images/cat1.png");
    catMove = loadAnimation("images/cat2.png","images/cat3.png");
    catNM = loadAnimation("images/cat4.png");

    mouseResting = loadImage("images/mouse1.png");
    mouseMove = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseNC = loadAnimation("images/mouse4.png");

    garden = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(900,600,10,10);
    cat.addImage(catResting);
    cat.scale=0.19;


    mouse = createSprite(200,600,10,10);
    mouse.addImage(mouseResting);
    mouse.scale=0.10;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.addAnimation("catv",catNM)
        cat.changeAnimation("catv");
        cat.velocityX=0;

        mouse.addAnimation("mousev",mouseNC)
        mouse.changeAnimation("mousev");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === 32)
  {
      cat.velocityX=-5;
      cat.addAnimation("catMoving",catMove);
      cat.changeAnimation("catMoving");

      mouse.addAnimation("mouseP",mouseMove);
      mouse.changeAnimation("mouseP");
      mouse.frameDelay=25;
      
  }


}
