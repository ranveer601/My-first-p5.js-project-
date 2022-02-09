function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    video=createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video,0,0,640,480);
    fill("red");
    circle(50,50,100);
    fill("red");
    circle(50,430,100);
    fill("red");
    circle(590,430,100);
    fill("red");
    circle(590,50,100);


}