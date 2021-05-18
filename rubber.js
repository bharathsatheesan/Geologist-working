class Rubber{
    constructor(x, y, r){
        var options = {
            'density': 1,
            'restitution':0.3,
            'friction':5
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill("brown");
        ellipse(0, 0, this.r*2, this.r*2);
        pop();
    }
}