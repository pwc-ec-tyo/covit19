const cwidth=[400,1150,450,500,1500,1100,1500,800,1550,1150,750];
const cheight=[450,1000,1200,750,1100,250,300,900,650,600,300];

const rSize =[500,500,500,500,500,500,500,500,500,500,500];
const rSize0 =[500,500,500,500,500,500,500,500,500,500,500];
const lSize = [0];
const collision = 0;
const bigText = ["能力と社会性の変化","生活と価値観の変化","余暇と気晴らしの変化","職業と人生観の変化","社会通念と手続きの変化","個人情報とプライバシーの変化","人・社会との繋がりの変化","ものづくりの変化","所属意識の変化","責任領域の変化","信頼形成の変化"];
var numsX = [];
var numsY = [];
const images = [loadImage("education.png"),loadImage("lifestyle.png"),loadImage("entertainment.png"),loadImage("workstyle.png"),loadImage("lifeevent.png"),loadImage("healthcare.png"),loadImage("lifeline.png"),loadImage("manufacture.png"),loadImage("supplychain.png"),loadImage("management.png"),loadImage("medical.png")];

function setup(){
  createCanvas(2000, 1500);//描画領域を指定
  background(255);
  randomSave();
}

function draw(){
  //背景
  noStroke();
  fill(255,255,255);
  rect(0,0,windowWidth, windowHeight);

  //軸
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(14);
  textAlign(CENTER,CENTER);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  text("個人としての意識", 100, height/2);
  text("集団としての意識", width-100, height/2);
  text("文化に関する思想", width/2, height-40);
  text("社会システムに関する思想", width/2, 0+40);

  for(var i=0; i<11;i++){
    //text("社会システムに関する思想", width/2,height/2);
    myCircle(i)

    //wave(i);
    fill(0);
    noStroke();
    imageMode(CENTER);
    //image(images[i], width/2,height/2, 70, 70);
    textSize(12);
    textAlign(CENTER,CENTER);
    text(bigText[i], cwidth[i], cheight[i]);
    textSize(10);
    textAlign(CENTER,CENTER);
    //text(titleText[i][collision], cwidth[i], cheight[i]-45);
  }

}



function randomSave() {
  var numsX = new Array(cwidth.length);
  for(let y = 0; y < cwidth.length; y++) {
    numsX = new Array(2000).fill(0);
  } 
  var numsY = new Array(cwidth.length);
  for(let y = 0; y < cwidth.length; y++) {
    numsY = new Array(2000).fill(0);
  }

    for(var i=0; i<cwidth.length;i++){
      var radius = rSize0[i]/4;
      var count = 1500;
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = sqrt(random(1));
        var x = cwidth[i]+ r * radius * cos(angle);
        var y = cheight[i] + r * radius * sin(angle);
        numsX[i][h] = x;
        numsY[i][h] = y;
      }

    }

}


function myCircle(i){
  strokeWeight(3);
  stroke(100,100,0);
  for (var h = 0; h < 1500; h++){
    //text(numsX[i][h], width/2,height/2);
    //var x = numsX[i][h];
    //var y = numsY[i][h];
    //point(x, y);
  }
}





















