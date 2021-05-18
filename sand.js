class Sand{
    constructor(x, y){
        var options={
            restitution:1.3,
            friction:5,
            density:1
        } 
        this.sand = Bodies.circle(x, y, 4, options);
        this.x = x;
        this.y = y;
        this.r = 4;
        World.add(world, this.sand); 
    }

    display(){
        var pos = this.sand.position;
        var angle = this.sand.angle;
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