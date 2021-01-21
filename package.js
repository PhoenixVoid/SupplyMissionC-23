class Package{

    constructor(x, y)
    {
        var options = {

            restitution:0.3,
            density:1,
            fricion:1.2,
            isStatic:true
        }
            this.body = Bodies.rectangle(x, y, 10, 10, options);
            
            this.x = x;
            this.y = y;
            this.width = 60;
            this.height = 60;
            
            this.image = loadImage("package.png");
            this.image.scale = 3;
            
            World.add(world, this.body);
    }   
    display() {

        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 60, 60);
        pop()    
    
    }
}