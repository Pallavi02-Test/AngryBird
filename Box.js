class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:0.2,
            density:1.0,
            friction:1.0
          }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
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