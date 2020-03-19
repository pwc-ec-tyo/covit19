float a=0; 
Maru[] maruhairetu;

void setup(){
  size(1200,800);
  noStroke();
  background(0);

  maruhairetu =new Maru[5];
  for(int i=0; i<maruhairetu.length;i++){
    Maru maru=new Maru(150+10*cos(random(100)),150+10*sin(random(600)));
    maruhairetu[i]=maru;
  }   
}

void draw(){
  
  color c1 = color(55, 55, 55);
  color c2 = color(0, 0, 0);
 
  color c3 = color(255, 204, 0);
  color c4 = color(0, 0, 0); 
  
  fill(color(0, 0, 0), 64);
  rect(0,0,width,height);
  fill(color(255, 204, 0));

//Big Circle
  for(float d = 400; d > 0; d -= 5){
      color c = lerpColor(c1, c2, d / 400.0);
      fill(c, 64);
      ellipse(width / 2, height / 2, d, d);
    }
      
      fill(0);
      textSize(20);
      textAlign(CENTER);
      text("COVID-19", width/2, height/2);
    
//Small Circle (Blue)
      fill(255, 204, 0);
      ellipse(width/2-100, height/2-100, 80, 80);
      
      //for(float d = 100; d > 0; d -= 5){
      //  color c = lerpColor(c3, c4, d / 100.0);
      //  fill(c, 64);
      //  ellipse(width / 2 -100, height / 2 -100, d, d);
      //}
      
      fill(0);
      textSize(10);
      textAlign(CENTER);
      text("COVID-19", width/2-100, height/2-100);
  
//Small Circle (Yellow)
      fill(255, 204, 0);
      ellipse(width/2+100, height/2-100, 80, 80);
      
      fill(0);
      textSize(10);
      textAlign(CENTER);
      text("COVID-19", width/2+100, height/2-100);
  
//Small Circle (Lime)
      fill(255, 204, 0);
      ellipse(width/2-100, height/2+100, 80, 80);
      
      fill(0);
      textSize(10);
      textAlign(CENTER);
      text("COVID-19", width/2-100, height/2+100);
      
//Small Circle (Red)
      fill(255, 204, 0);
      ellipse(width/2+100, height/2+100, 80, 80);
      
      fill(0);
      textSize(10);
      textAlign(CENTER);
      text("COVID-19", width/2+100, height/2+100);
      
//Stroke Circle
  stroke(250,250,250);
  strokeWeight(0.1);
  noFill();
  ellipse(width/2, height/2,300,300);
  
//flow
  noStroke();
  //ellipse(mouseX,mouseY,30,30);
  for(Maru maru:maruhairetu){
    maru.draw();
  }
}

class Maru{
  float x,a;
  Maru(float x, float a){
    this.x=x;
    this.a=a;
  }
 
  void draw(){
      if (mousePressed)
      {
      fill(color(255, 204, 0));    
      a+=x/5000;
      ellipse(width/2+x*cos(a), height/2+x*sin(a),5,5);
      //ellipse(mouseX+x*cos(a),mouseY+x*sin(a),5,5);
    }
  }
}
