const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10;
var box11,box12;
var box13;
var ground,ground1,wall;
var ball;
var sl;
var score = 0;
var bg,backgroundImg;

function preload() {
    timeBackground();
}

function setup() {
    createCanvas(1300, 750);


	engine = Engine.create();
	world = engine.world;

    Engine.run(engine);
    
    ground = new Ground(650,660,1300,20);
    ground1 = new Ground(1007.5,545,400,20);
    //wall = new  Ground(850,340,20,250)
    box1 = new Box1(920,510,35,50);
    box2 = new Box1(955,510,35,50);
    box3 = new Box1(990,510,35,50);
    box4 = new Box1(1025,510,35,50);
    box5 = new Box1(1060,510,35,50);
    box6 = new Box1(1095,510,35,50);
    box7 = new Box2(955,460,35,50);
    box8 = new Box2(990,460,35,50);
    box9 = new Box2(1025,460,35,50);
    box10 = new Box2(1060,460,35,50);
    box11 = new Box3(990,410,35,50);
    box12 = new Box3(1025,410,35,50);
    box13 = new Box4(1007.5,360,35,50);
    ball = new Hexagon(250,470,30);
    sl = new SlingShot(ball.body,{x:250,y:450});
}

function draw() {
    rectMode(CENTER);

    if(backgroundImg) {
      background(backgroundImg);
      noStroke();
      textSize(35);
      text("score : " + score ,width-200,50);
    }
    drawSprites();

    //ground.display();
    ground1.display();
    //wall.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    ball.display();
    sl.display();
    
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    sl.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        Matter.Body.setPosition(ball.body, {x:250 , y: 470});
      sl.attach(ball.body);
    }
}


async function timeBackground() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();

    var daytime = responseJson.datetime;
    console.log(daytime);

    var time_h = daytime.slice(11,13);
    //console.log(time_h);

     if(time_h > 6 && time_h < 19 ) {
        bg = "bg1.jpg";
        fill(0);
      }
      else {
        bg = "bg2.jpg";
        fill(225);
      }
  
      backgroundImg = loadImage(bg);
      
}

