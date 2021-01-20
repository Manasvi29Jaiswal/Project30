const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var polygon, slingShot;
var ground;
var canvas;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
var block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,blcok25;
var ground1,ground2,ground3;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(850,160,220,20)
    ground2 = new Ground(500,300,280,20)
    ground3 = new Ground(600,390,width,20)

    block1 = new Block(500,150)
    block2 = new Block(470,190)
    block3 = new Block(500,190)
    block4 = new Block(530,190)
    block5 = new Block(440,230)
    block6 = new Block(470,230)
    block7 = new Block(500,230)
    block8 = new Block(530,230)
    block9 = new Block(560,230)
    block10 = new Block(410,270)
    block11 = new Block(440,270)
    block12 = new Block(470,270)
    block13 = new Block(500,270)
    block14 = new Block(530,270)
    block15 = new Block(560,270)
    block16 = new Block(590,270)

    block17 = new Block2(850,50)
    block18 = new Block2(820,90)
    block19 = new Block2(850,90)
    block20 = new Block2(880,90)
    block21 = new Block2(790,130)
    block22 = new Block2(820,130)
    block23 = new Block2(850,130)
    block24 = new Block2(880,130)
    block25 = new Block2(910,130)

    polygon = new Polygon(100,100);
    slingShot = new Slingshot(polygon.body,{x:200,y:200});
    

    Engine.run(engine);
}

function draw(){
    background("chartreuse");
     
    ground1.display();
    ground2.display();
    ground3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    polygon.display();
    slingShot.display(); 
	
	drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

    slingShot.fly()
}

function keyPressed(){

    if(keyCode===32){
    
    slingShot.attach(polygon.body)
    
}

}






