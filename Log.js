class Log{
    constructor(x,y,height,angle){
        var options = {
            restitution:0.2,
            density:1.5,
            friction:1.0
          }
          this.body = Bodies.rectangle(x,y,20,height,options);
          this.width = 20;
          this.height = height;
          Matter.Body.setAngle(this.body,angle);
          World.add(myworld, this.body);
    }
    display(){
        var pos = this.body.position;
        var angles = this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angles)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill ("white");
        rect(0,0,this.width,this.height);
        pop ();
    }
}