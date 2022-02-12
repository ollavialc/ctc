let h=0
let s=0
let l=0
let t=1;
var rainbow;

function setup() {
  createCanvas(600, 600);
  background(255);
  rainbow = 0;
}

function draw() {
  colorMode(HSL, 360);
  stroke(0,0,0);
  strokeWeight(1.5);
  fill(rainbow, 180, 180);
  ellipse(50, 290, 20, 20);

  fill(0, 0, 360);
  ellipse(50, 230, 20, 20);
  
  fill(0,0,0);
  ellipse(50, 260, 20, 20);
  
  fill(0, 360, 180);//red
  ellipse(50, 50, 20, 20);
  
  fill(30, 360, 180);//orange
  ellipse(50, 80, 20, 20);
  
  fill(60, 360, 180);//yellow
  ellipse(50, 110, 20, 20);
  
  fill(125, 360, 180);//green
  ellipse(50, 140, 20, 20);
  
  fill(250, 360, 180);//blue
  ellipse(50, 170, 20, 20);
  
  fill(270, 360, 180);//purple
  ellipse(50, 200, 20, 20);
  

  if (rainbow > 360) {
    rainbow = 0;
  } else {
    rainbow++;
  }
  
  if(keyIsDown(SHIFT)){ 
  fill(h,s,l);
  stroke(h,s,l);
  brush(mouseX,mouseY);
 }

}


function keyTyped(){
  
  if (key === '1') {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    t=1;
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (key === '2') {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    t=2;
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (key === '3') {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    t=4;
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (key === '4') {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    t=8;
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (key === '5') {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    t=16;
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (key === 'c'){
  background(0,0,365);
  }
}



function mousePressed() {
  
  if (mouseX > 30 && mouseX < 70 && mouseY > 30 && mouseY < 70) {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    h=0;
    s=360;
    l=180;// red
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
    
    if (mouseX > 30 && mouseX < 70 && mouseY > 55 && mouseY < 100) {
    noStroke()
    fill(0,0,360);
    rect(30,320,70,20);
    stroke(30, 360, 180);
    h=30
    s=360
    l=180// orange
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (mouseX > 30 && mouseX < 70 && mouseY > 105 && mouseY < 130) {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    h=60;
    s=360;
    l=180;// yellow
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (mouseX > 30 && mouseX < 70 && mouseY > 130 && mouseY < 160) {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    h=125
    s=360
    l=180;// green
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (mouseX > 30 && mouseX < 70 && mouseY > 155 && mouseY < 190) {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    h=250
    s=360
    l=180;// blue
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (mouseX > 30 && mouseX < 70 && mouseY > 180 && mouseY < 220) {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    h= 270
    s= 360
    l= 180;// purple
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (mouseX > 30 && mouseX < 70 && mouseY > 220 && mouseY < 240) {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    h=0;
    s= 0;
    l=360;// white
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (mouseX > 30 && mouseX < 70 && mouseY > 280 && mouseY < 300) {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    h=rainbow;
    s=180;
    l=180;// rainbow
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
  
  if (mouseX > 30 && mouseX < 70 && mouseY > 250 && mouseY < 270) {
    noStroke();
    fill(0,0,360);
    rect(30,320,70,20);
    h=0;
    s=0;
    l=0;// black
    strokeWeight(t);
    strokeCap(ROUND);
    stroke(h,s,l);
    line(40, 330, 90, 330);
  }
}
  
function mouseDragged() {
  fill(h,s,l);
  stroke(h,s,l);
  strokeWeight(t);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function doubleClicked(){
    star(mouseX, mouseY);
}

function star(x,y){
  noStroke();
  fill(h,s,l);
  beginShape();
  vertex(x+30, y);
  vertex(x+20, y+30);
  vertex(x, y+45);
  vertex(x+20, y+40);
  vertex(x+20, y+70);
  vertex(x+30, y+40);
  vertex(x+70, y+70);
  vertex(x+40, y+40);
  vertex(x+60, y+20);
  vertex(x+35, y+30);
  vertex(x+30, y);
  endShape(CLOSE);
}

function brush(x,y){
  ellipse(x-8,y,1);
  ellipse(x-4,y,1);
  ellipse(x,y,1);
  ellipse(x+4, y,1);
  ellipse(x+8, y,1);
}