function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background('black');
  frameRate();


  angleMode(DEGREES);
}

function draw() {
  // put drawing code here



translate(width/2, height/2);
push()
if (frameCount<1000) {
  //in basso
  push();
  noFill();
  translate(-100,0);
  stroke(lerpColor(color('red'), color('blue'), frameCount/400));

ellipse(cos(frameCount*2)*100, frameCount*2, 400, 400);
pop();

//in alto
push();
noFill();
translate(-100,0);
stroke(lerpColor(color('red'), color('blue'), frameCount/400));

ellipse(cos(frameCount*2)*100, -frameCount*2, 400, 400);
pop();


//dx e sx
push();
noFill();
  translate(-100,0);
stroke(lerpColor(color('red'), color('blue'), frameCount/400));

ellipse(-(frameCount*2-100), sin(frameCount*2)*100, 400, 400);
pop();

push();
noFill();
  translate(-100,0);
stroke(lerpColor(color('red'), color('blue'), frameCount/400));

ellipse(frameCount*2 +100, sin(frameCount*2)*100, 400, 400);
pop();
pop()
}

//cerchiodiinee
if(frameCount>400 && frameCount<800)
{
  noFill();
  push();
stroke(color('black'));
ellipse(0, 0, (frameCount-400)*16, (frameCount-400)*16);
  pop();
}


//cerchiopieno
if(frameCount>404 && frameCount<600){
  push();
fill(color('black'));
ellipse(0, 0, (frameCount-404)*12, (frameCount-404)*12);
  pop();

}


//coso con linee bianche
if(frameCount>600 && frameCount<800){

  noFill();
  stroke('white');
push();

rotate(180);
  line(-width/2, -height/2, cos(frameCount*2)*width/6, sin(frameCount*2)*width/6);
stroke('white'
)
  pop();


  push();

  rotate(0);
    line(-width/2, -height/2, cos(frameCount*2)*width/6, sin(frameCount*2)*width/6);
    stroke(color('white'));
    pop();

}

//cerchio al centro ultimo
if (frameCount>800 && frameCount<1070){
  stroke(lerpColor(
    color('red'), color('gold'), (frameCount-800)/300
  ))

  push();
rotate(180);
  line(width/6, 0, cos(frameCount)*width/6, sin(frameCount)*width/6);
  pop();

  push();
  rotate(90);
    line(width/6, 0, cos(frameCount)*width/6, sin(frameCount)*width/6);
      pop();

    push();
  rotate(270);
      line(width/6, 0, cos(frameCount)*width/6, sin(frameCount)*width/6);
          pop();

      push();
  rotate(360);
        line(width/6, 0, cos(frameCount)*width/6, sin(frameCount)*width/6);
        pop();
}

//cerchio nero che si chiude
if(frameCount>1070 && frameCount<1220){
noFill();
push();
stroke(color('black'));
strokeWeight(1+(frameCount-1070)*15);
  ellipse(0, 0, width+200, width+200);
  pop();
}

//cerchio no riempimento bianco
if(frameCount>1220 && frameCount<1320){
  noFill();
push()
stroke(color('white'));
ellipse(0, 0, (frameCount-1220)*25, (frameCount-1220)*25);
pop()
}

if(frameCount>1320 && frameCount<1410 ){
  noFill();
push()
stroke(color('black'));
ellipse(0, 0, (frameCount-1320)*25, (frameCount-1320)*25);
pop()
}

if(frameCount>1410){
  noStroke();
  push()
  fill(color('black'));
  ellipse(0, 0, (frameCount-1400)*15, (frameCount-1400)*15);
  pop()
}



}
