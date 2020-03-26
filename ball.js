class Ball {

    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':10
        }
        this.body = Bodies.circle(x,y,r,options);

        this.r = r;

       World.add(world,this.body);
    }

    show(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        strokeWeight(10);
        stroke("red");
        ellipse(pos.x, pos.y, 40);
        pop();
    }

}