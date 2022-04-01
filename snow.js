class Snow{
    constructor(x,y){
        var options = {
            'restitution' : 0.9,
            'friction' : 0.1, 
        }
        this.body = Bodies.circle(x,y,50,options)
        this.image = loadImage("snow5.webp")
        this.r = 50
        World.add(world,this.body)
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;


        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,70,70)
        pop()
      }
    } 