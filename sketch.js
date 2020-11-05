const Engine = Matter.Engine;
const World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gamestate = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(20)
 text("Score : "+score,20,30);
 textSize(28);
 text("500",20,530);
 text("500",100,530);
 text("500",180,530);
 text("500",260,530);
 text("100",340,530);
 text("100",420,530);
 text("100",500,530);
 text("200",580,530);
 text("200",660,530);
 text("200",740,530);

  Engine.update(engine);


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
     
particle.display();

if(particle.body.position.y>760){

if(particle.body.position.x>301 && particle.body.position.x<600){

score = score+100;
turn = turn+1;
particle = null;
if(turn>=5){

gamestate = "end";

}

}

else if(particle.body.position.x>601 && particle.body.position.x<799){

  score = score+200;
  turn = turn+1;
  particle = null;
  if(turn>=5){
  
  gamestate = "end";
  
  }


}

else if(particle.body.position.x<300 && particle.body.position.x>1){

  score = score+500;
  turn = turn+1;
  particle = null;
  if(turn>=5){
  
  gamestate = "end";
  
  }
}
}
   }

   if(gamestate == "end"){

    fill ("red");
textSize(40);
  text("GAME OVER",250,450);

   }
}

function mousePressed(){

if(gamestate=="play"){

//score++;
particle = new Particle(mouseX,10,10);


}


}