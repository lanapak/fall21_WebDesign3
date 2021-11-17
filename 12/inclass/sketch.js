let posX;
let posY;

let velX;
let velY;

let radius;
let circleClr;

//UI
let sliderHue;
let clickCounter;


function setup(){
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('canvasParent');

    colorMode(HSB, 360, 100, 100);

    sliderHue = createSlider(0, 360, 0, 15);
    sliderHue.parent('canvasUI');
    sliderHue.style('width', '100px');


    posX = width/2;
    posY = height/2;

    velX= 4;
    velY= 3;

    radius = 50;
    circleClr = color(13, 58, 88);

    clickCounter = 0;
    
}

function draw(){
    background(52, 9, 96);

    // fill( 200, 142, 324);
    noFill();
    stroke(234, 33, 36);
    strokeWeight(10);
    rect(5, 5, 70, 30);

    textSize(24);
    strokeWeight(2);
    fill(234, 33, 36);
    text(clickCounter, 12, 28);


    circleClr = color(sliderHue.value(), 80, 100);
    fill(circleClr);
    noStroke();
    circle(posX, posY, radius * 2);
    if(posX + radius >= width || posX - radius <=0){
        velX = velX * -1;
    }
    if(posY + radius >= height || posY - radius <=0){
        velY = velY * -1;
    }
    posX = posX += velX;
    posY += velY;


} //end of draw 

function mouseReleased(){
    // radius += 10;
    if(dist(mouseX, mouseY, posX, posY) < radius){
        // circleClr = color(13, 58, 88);
        clickCounter++;
        if(velX > 0){
            velX++;
        }
        else{
            velX--;
        }
        if(posX > 0){
            posX++;
        }
        else{
            posX--;
        }
    }
    else{
        // circleClr = color(151, 28, 70);
    }
}