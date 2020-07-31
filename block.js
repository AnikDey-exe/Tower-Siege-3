class Block
{
  constructor(x,y,width,height)
  {
    var options = 
    {
      isStatic: false,
      restitution:0.8,
      friction:1.0,
      density:1.0
    }  
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
  }
  display()
  {
    fill("green");
    if(this.body.speed < 3)
    {
     push();
     rectMode(CENTER);
     rect(this.body.position.x,this.body.position.y,this.width,this.height);
     pop();
    }
    else
    {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,0,0,this.visibility);
      pop();
    }
  }
  score1()
  {
    if(this.visibility < 0 && this.visibility > -105)
    {
      score++;
    }
  }
}
