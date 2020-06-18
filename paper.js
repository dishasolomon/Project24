class Paper {
    constructor(){
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(width/2 , 200 , 5);
        World.add(world, ball);
    }

    display(){
        ellipseMode(CENTER);
        fill(255,0,0);
    }
}