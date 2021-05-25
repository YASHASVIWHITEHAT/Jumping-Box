var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    //create 4 different surfaces
    gameObject1 = createSprite(550,500,100,30);
    gameObject1.shapeColor = "green";
    gameObject2 = createSprite(390,500,100,30);
    gameObject2.shapeColor = "red";
    gameObject3 = createSprite(250,500,100,30);
    gameObject3.shapeColor = "purple";
    gameObject4 = createSprite(100,500,100,30);
    gameObject4.shapeColor = "blue";
    



    //create box sprite and give velocity
    whiteBox= createSprite(random(20,750),450,50,50)


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

   drawSprites()

    //add condition to check if box touching surface and make it box
}
