//creating variables
var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    //load images and sound
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

    //create sprites and bodies
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
    fairy.setCollider("circle",480,0,50);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    //creating engine and adding it to world
	engine = Engine.create();
	world = engine.world;

    //starbody background
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
   
}


function draw() {
  background(bgImg);

  
 
//fairy touching the star
if(fairy.isTouching(star)){
    fairy.velocityX = 0;
    star.velocityY = 0;
}
  keyPressed();
  drawSprites();

}

function keyPressed(){

	//fairy should move to right wih right key
	if(keyCode==RIGHT_ARROW){
		fairy.velocityX = 3;
	}
	 //fairy should move to left wih left key
	  if(keyCode==LEFT_ARROW){
		fairy.velocityX = -3;
	}
	
	//star should fall down with down key
	 if(keyCode==DOWN_ARROW){
		 //playing sound
		fairyVoice.play();
		star.velocityY = 3;
	}

	
   
}


 


