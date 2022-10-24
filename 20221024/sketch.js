function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(0)
  noFill()
  stroke(255)
var w=mouseX/10
 for(var j=0;j<height/(50);j++)
  {
  for(var i=0;i<width/(50);i++)
  {
  stroke(0,171,179)
  ellipse(25+50*i,25+50*j,mouseX/10)        
  rect(25+50*i,25+50*j,mouseY/4)
  stroke("#EAEAEA")
  ellipse(50+50*i,50+50*j,25)      
    }
   }  
  }