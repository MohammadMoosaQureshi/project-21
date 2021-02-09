var canvas,A,B,C,D,ball;
var Edges
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
A= createSprite(100,580,200,20);
A.shapeColor="blue"
B= createSprite(300,580,200,20);
B.shapeColor="Green"
C= createSprite(500,580,200,20);
C.shapeColor="yellow"
D= createSprite(700,580,200,20);
D.shapeColor="red"
ball=createSprite(50,560,20,20)
ball.velocityX=2
ball.velocityY=5

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSpriteo
   Edges=createEdgeSprites()
   ball.bounceOff(Edges)
    if(A.isTouching(ball)&& ball.bounceOff(A)){
        ball.shapeColor='Gold'
    }
    if(B.isTouching(ball)&& ball.bounceOff(B)){
        ball.shapeColor='silver'
    }
    if(C.isTouching(ball)&& ball.bounceOff(C)){
        ball.shapeColor='white'
    }
    if(D.isTouching(ball)&& ball.bounceOff(D)){
        ball.shapeColor='black'
    }
   
    
drawSprites();

    //add condition to check if box touching surface and make it box
    
}
