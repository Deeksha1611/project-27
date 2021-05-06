const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, ball2, ball3, ball4, ball5;
var string1, string2, string3, string4, string5;




function setup(){
    createCanvas(800,450);
    engine = Engine.create();
    world = engine.world;

    
	
   

    ball1 = new BOB(260, 200, 35);
    string1 = new WIRE(ball1.body, {x: 260, y: 80});

    ball2 = new BOB(330, 200, 35);
    string2 = new WIRE(ball2.body, {x: 330, y: 80});

    ball3 = new BOB(400, 200, 35);
    string3 = new WIRE(ball3.body, {x: 400, y: 80});

    ball4 = new BOB(470, 200, 35);
    string4 = new WIRE(ball4.body, {x: 470, y: 80});

    ball5 = new BOB(590, 200, 35);
    string5 = new WIRE(ball5.body, {x: 540, y: 80});
    //slingshot = new Slingshot(bird.body, {x: 120, y: 180}, 50, 0.01);
}

function draw(){
    background("aqua");
    Engine.update(engine);



    string1.display();
    ball1.display();

    string2.display();
    ball2.display();

	string3.display();
    ball3.display();

    string4.display();
    ball4.display();

    string5.display();
    ball5.display();

	rectMode(CENTER);
    fill(200, 200, 200);
    stroke("black");
    rect(400, 80, 375, 50);
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball5.body,ball5.body.position,{x:100,y:0})
    }
}

