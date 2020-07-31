class Hexagon
{
  constructor(x,y)
  {
    var options = 
    {
      restitution:0.8,
      friction:1.0,
      density:1.0
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x,this.y,40,options);
    this.r = 40;
    this.image = loadImage("polygon.png");
    World.add(world,this.body);
  }

  display()
  {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);
  }
}