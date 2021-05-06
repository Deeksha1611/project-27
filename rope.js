class WIRE{
    constructor(body1, pointB){
        var options = {
            bodyA: body1,
            pointB: pointB,
            length: 200,
            stiffness: 0.04
        }

        this.string = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.string);
    }

    display(){
       

        var pointA = this.string.bodyA;
        var pointB = this.pointB;

        line(pointA.position.x, pointA.position.y, pointB.x, pointB.y);
    }
}