var sketch1 = function (p){
    p.setup=function(){
    p.createCanvas(p.windowWidth/3, p.windowWidth/3);
    p.background (15);
    }
p.draw=function(){
    p.stroke(247);
    p.noFill()
    p.ellipse(p.mouseX, p.mouseY, 50,50);
    }
}
var sketch2 = function (p){
    p.setup=function(){
    p.createCanvas(p.windowWidth/3, p.windowWidth/3);
    p.background (15);
    }
p.draw=function(){
    p.stroke(247);
    p.noFill()
    p.ellipse(p.windowWidth/6,p.windowWidth/6,p.mouseX,p.mouseY);
    }
}
/*var sketch3 = function (p){
    p.setup=function(){
    p.createCanvas(p.windowWidth/3, p.windowWidth/3);
    p.background (247);
    }
p.draw=function(){
    p.fill (247);
    p.stroke(15);
    p.ellipse(p.mouseX,p.mouseY,50,50);
    }
}
var sketch4 = function (p){
    p.setup=function(){
    p.createCanvas(p.windowWidth/3, p.windowWidth/3);
    p.background (247);
    }
p.draw=function(){
    p.fill (247);
    p.stroke(15);
    p.ellipse(p.windowWidth/6,p.windowWidth/6,p.mouseX, p.mouseY);
    }
}*/

var myp5_1 = new p5(sketch1);
var myp5_2 = new p5(sketch2);
/*var myp5_3 = new p5(sketch3);
var myp5_4 = new p5(sketch4);*/

function resetBackground() {
    myp5_1.background(15);
    myp5_2.background(15);
   /* myp5_3.background(247);
    myp5_4.background(247);*/
}

setInterval(resetBackground, 10000);