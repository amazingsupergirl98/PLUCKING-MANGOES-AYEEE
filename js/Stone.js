class Stone {
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0,
			friction : 0.3,
			density : 1.2
        }
        this.x = x;
		this.y = y;
		this.r = radius;
		this.image = loadImage("stone.png");
		this.body = Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);
    }
    display(){
        var position = this.body.position;

        push();
        translate(position.x, position.y);
        fill(255, 0, 255);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
    }
}