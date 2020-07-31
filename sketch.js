const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundIMG;
var bg = "light.jpg";
var score = 0;

function preload()
{
  getBackgroundIMG();
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(285,360,200,10);

  ground2 = new Ground(605,190,260,10);

  box1 = new Box(230,345,30,40);
  box2 = new Box(260,345,30,40);
  box3 = new Box(290,345,30,40);
  box4 = new Box(320,345,30,40);
  box5 = new Box(350,345,30,40);

  box6 = new Box(260,305,30,40);
  box7 = new Box(290,305,30,40);
  box8 = new Box(320,305,30,40);

  box9 = new Box(290,265,30,40);

  box10 = new Box(515,175,30,40);
  box11 = new Box(545,175,30,40);
  box12 = new Box(575,175,30,40);
  box13 = new Box(605,175,30,40);
  box14 = new Box(635,175,30,40);
  box15 = new Box(665,175,30,40);
  box16 = new Box(695,175,30,40);

  box17 = new Box(545,135,30,40);
  box18 = new Box(575,135,30,40);
  box19 = new Box(605,135,30,40);
  box20 = new Box(635,135,30,40);
  box21 = new Box(665,135,30,40);

  box22 = new Box(575,95,30,40);
  box23 = new Box(605,95,30,40);
  box24 = new Box(635,95,30,40);

  box25 = new Box(605,55,30,40);

  hexagon = new Hexagon(120,160);

  slingshot = new SlingShot(hexagon.body,{x:120,y:160});
}

function draw() {
  if(backgroundIMG)
  background(backgroundIMG);  

  textSize(20);
  fill("red");
  text("Score: "+score,700,350);

  Engine.update(engine);

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  box25.display();
  box25.score();

  ground1.display();
  ground2.display();

  hexagon.display();
  slingshot.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode == 32)
  {
    slingshot.attach(hexagon.body);
  }
}

async function getBackgroundIMG()
{
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responsejson = await response.json();
  var currentDateTime = responsejson.currentDateTime;
  var hour = currentDateTime.slice(11,13);
  if(hour >= 6 && hour <= 18)
  {
    bg = "light.jpg";
  }
  else
  {
    bg = "dark.jpg";
  }
  backgroundIMG = loadImage(bg);
}