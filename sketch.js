var f = [];
var z;
var n = 0;
var x = 1;
var y = 1;
var easing = 0.05;
var keyInd = -1;
var recW;



function setup() {
  createCanvas(800, 600);
  noStroke();
  z = second();
  for(var i=0; i<59; i++){
  f[i] = int(n+random(60));
  }
   
  strokeWeight(20);
  recW = width/4;
}

function draw() {
 
  
   var targetX = mouseX;
    var dx = targetX - x;
    x += dx * easing;

    var targetY = mouseY;
    var dy = targetY - y;
    y += dy * easing;

  for (var i = 0; i < width; i++) {
    
    var r = random(255);
    var b = random(225);
    var g = random(225);
    stroke(r,b,g);
    line(i, 0, i, height);
  }

  for( var i=0; i<second(); i++){
     background(220);
    fill(0);
    textSize(25);
    
    text(f[int(i+random(60))], x,y-50,66,66); 
    text(f[int(i+random(60))], x,y+50,66,66); 
    text(f[int(i+random(60))], x+50,y,66,66); 
    text(f[int(i+random(60))], x-50,y,66,66); 
    text(f[int(i+random(60))], x+30,y+30,66,66); 
    text(f[int(i+random(60))], x+30,y-30,66,66); 
    text(f[int(i+random(60))], x-30,y+30,66,66); 
   text(f[int(i+random(60))], x-30,y+30,66,66); 
    text(f[int(i+random(60))], x-30,y-30,66,66); 
    
     text(f[int(i+random(60))], x,y-100,66,66); 
    text(f[int(i+random(60))], x,y+100,66,66); 
    text(f[int(i+random(60))], x+100,y,66,66); 
    text(f[int(i+random(60))], x-100,y,66,66); 
    text(f[int(i+random(60))], x+60,y+60,66,66); 
    text(f[int(i+random(60))], x+60,y-60,66,66); 
    text(f[int(i+random(60))], x-60,y+60,66,66); 
   text(f[int(i+random(60))], x-60,y+60,66,66); 
    text(f[int(i+random(60))], x-60,y-60,66,66);
    
     text(f[int(i+random(60))], x,y-150,66,66); 
    text(f[int(i+random(60))], x,y+150,66,66); 
    text(f[int(i+random(60))], x+150,y,66,66); 
    text(f[int(i+random(60))], x-150,y,66,66); 
    text(f[int(i+random(60))], x+90,y+90,66,66); 
    text(f[int(i+random(60))], x+90,y-90,66,66); 
    text(f[int(i+random(60))], x-90,y+90,66,66); 
   text(f[int(i+random(60))], x-90,y+90,66,66); 
    text(f[int(i+random(60))], x-90,y-90,66,66); 
    
    text(f[int(i+random(60))], x,y-200,66,66); 
    text(f[int(i+random(60))], x,y+200,66,66); 
    text(f[int(i+random(60))], x+200,y,66,66); 
    text(f[int(i+random(60))], x-200,y,66,66); 
    text(f[int(i+random(60))], x+120,y+120,66,66); 
    text(f[int(i+random(60))], x+120,y-120,66,66); 
    text(f[int(i+random(60))], x-120,y+120,66,66); 
   text(f[int(i+random(60))], x-120,y+120,66,66); 
    text(f[int(i+random(60))], x-120,y-120,66,66);
    
    text(f[int(i+random(60))], x,y-250,66,66); 
    text(f[int(i+random(60))], x,y+250,66,66); 
    text(f[int(i+random(60))], x+250,y,66,66); 
    text(f[int(i+random(60))], x-250,y,66,66); 
    text(f[int(i+random(60))], x+150,y+150,66,66); 
    text(f[int(i+random(60))], x+150,y-150,66,66); 
    text(f[int(i+random(60))], x-150,y+150,66,66); 
   text(f[int(i+random(60))], x-150,y+150,66,66); 
    text(f[int(i+random(60))], x-150,y-150,66,66);
    
    if(mouseIsPressed){
      
      fill(0);
      textSize(100);
      text('Esc',x,y,200,200);
      
      }
    
     if(keyCode === ESCAPE){
       
       background(0); 
       
         if(mouseIsPressed){
           background(0);
           for (var i =0; i<600;i++){
             textSize(25);
       text("This isn't the end", width/2, height/2);
         }
      }
    }else if(keyCode == DELETE){
         background(0);
      noLoop();
   
     }else if(key>='a' &&key<='z'){
       background(0);
       keyInd =key.charCodeAt(0) - 'a'.charCodeAt(0); 
    randFill_r = Math.floor(Math.random() * 255 + 1);
    randFill_g = Math.floor(Math.random() * 255 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r,randFill_g,randFill_b);
    var k = map(keyInd, 0, 25, 0, width - recW);
    rect(k, 0, recW, height);
       if(mouseIsPressed){
           background(0);
           for (var i =0; i<600;i++){
             textSize(25);
       text("DELETE ME", width/2, height/2);
         }//for
     }//else if
  
 }//elsif
}//for
}//draw






