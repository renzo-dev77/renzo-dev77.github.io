let r_background = 220;
let g_background = 200;
let b_background = 0;

function setup() {
  createCanvas(800, 800);
  background(r_background,g_background,b_background);
}

function draw() {

  
  if(mouseY>=400){
    fill(200);
    circle(mouseX,mouseY,40);
     }
  else{
    fill(255);
    circle(mouseX,mouseY,40);    
  }

 }

function mousePressed(){
  background(r_background,g_background,b_background);
}

