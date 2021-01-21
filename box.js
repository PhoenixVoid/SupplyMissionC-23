class Box {
    constructor(x, y, width, height)
    {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(20);
        stroke(255, 0, 0);
        rect(0, 0, this.width, this.height);
        pop();
    }
}