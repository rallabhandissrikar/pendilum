const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup(){
    createCanvas(1600,900);

    engine = Engine.create();
    world = engine.world;

    ball = new Ball(400,400,40);
   ball2 = new Ball(490,400,40)
    ball3 = new Ball(580,400,40);
    ground = new Ground(100,400,1600,10);

    constrani = new Sling(ball.body,{x:400,y:400});
    pendlum2= new Sling(ball3.body,{x:580,y:400});
   pendlum3 = new Sling(ball2.body,{x:490,y:400});
   // pendlum4 = new Sling(ball2.body,{x:490,y:400});


}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
   }

function draw(){
    background(255);
   Engine.update(engine);
    ball.show();
    ground.show();
    ball2.show();
    constrani.display();
   text("drag mouse for keeping pendulum in motion", 200,200, 300,200);
      
    ball3.show();
    pendlum2.display();
 pendlum3.display();

     
}
