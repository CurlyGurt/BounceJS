class Dot {
    constructor(x,y) {
        this.pos = new Vector(x,y);
        this.oldpos = new Vector(x, y);

        this.friction = 0.97;
        this.groundFriction = 0.7;

        this.gravity = new Vector(0,1);

        this.radius = 5;
        this.color = '#41ebf7'
        this.mass = 1; 
    }

    update() {
        let vel = Vector.sub(this.pos, this.oldpos);
        vel.mult(this.friction);

        // if the point touches the ground, set to groundFriction
        if (this.pos.y >= CANVAS_HEIGHT - this.radius && vel.magSq() > 0.000001) {
            var m = vel.mag();
            vel.x /= m;
            vel.y /= m;
            vel.mult(m * this.groundFriction);
        }
        this.oldpos.setXY(this.pos.x, this.pos.y);
        this.pos.add(vel);
        this.pos.add(this.gravity);
    }

    constrain() {
        if (this.pos.x > CANVAS_WIDTH - this.radius) {
            this.pos.x = CANVAS_WIDTH - this.radius;
        }
        
    }
}