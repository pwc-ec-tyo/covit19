float a=0; 
int cwidth[]={220,520,270,780,950,1050, 650};
int cheight[]={180,255,580,150,600,250,700};
int cnt = 0;
float rSize[] = {250,300,100,200,180,250,300};
String smallText[][]=
{{"認可外の\n医療品の流通", "株価下落を\n狙った空売り", "ネットで\n転売する", "過剰購入\n買い占め"},
{"安心が\n伝播する", "医療品・人員の\n追加補給", "医療格差を\n解消する", "医療サービスの\n増強・進歩"},
{"氾濫した情報で\n混乱する", "自己判断での\n医療行為", "情報を集める", "外出・人との\n接触を避ける"},
{"パンデミックを\n宣言する", "国民の行動を\n統制する", "医療援助", "事象P"},
{"リモートワークが\n浸透する", "清潔さへの\n関心の高まり", "万一に備え\n貯蓄する", "キャッシュレス\neコマースでの\n物資補給"},
{"新しい法律へ\n対応する", "製品の機能\nパッケージの変更", "生産・流通\nプロセスの変更", "清潔なイメージ\nPR・CSR戦略"},
{"収入の減少を\n想定する", "旅行・出張を\nキャンセルする", "集会参加を\nキャンセルする", "ポートフォリオを\n変更する"},
{"事象I", "事象J", "事象K", "事象L"},

};
Maru[] maruhairetu;

void setup(){
  PFont font = createFont("YuMin_36pKn-Medium",50);
  textFont (font);
  size(1280,1000);
  noStroke();
  background(0);

  maruhairetu =new Maru[5];
  for(int i=0; i<maruhairetu.length;i++){
    Maru maru=new Maru(rSize[i],rSize[i]);
    maruhairetu[i]=maru;
  }   
}

void draw(){
//BackGround
    noStroke();
    fill(color(0, 0, 0), 32);
    rect(0,0,width,height);

//line
  stroke(250,250,250);
  strokeWeight(0.1);
  line(cwidth[0]+rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[1]-rSize[1]/3, cheight[1]-rSize[1]/3);
  line(cwidth[0]-rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[2]-rSize[2]/3, cheight[2]-rSize[2]/3);
  line(cwidth[1]+rSize[1]/3, cheight[1]-rSize[1]/3, cwidth[3]-rSize[3]/3, cheight[3]-rSize[3]/3);
    
  OtherCircle();
    
    
  for(int i=0; i<cwidth.length;i++){    
  
  //flow
    noStroke();
    for(Maru maru:maruhairetu){
      maru.draw();
    }
      
  //Big Circle
    BigCircle(i);
    text("不正なビジネスが流行る", cwidth[0], cheight[0]);
    text("市場の自浄効果", cwidth[1], cheight[1]);
    text("短期的な感染対策をとる", cwidth[2], cheight[2]);
    text("政府や外国からの支援", cwidth[3], cheight[3]);
    text("予防習慣が定着する", cwidth[4], cheight[4]);
    text("身の回りの生活が変わる", cwidth[5], cheight[5]);
    text("支出を減らす", cwidth[6], cheight[6]);
    
  //Small Circle
    SmallCircle(i);
  }
  
  cnt++;
  if (1000 * sin(radians(cnt)) > 0) {
    //smaller
    rSize[0] += 0.7;
    rSize[1] -= 0.6;
    rSize[2] += 3;
    rSize[3] -= 0.2;
    rSize[4] += 0.7;
    rSize[5] += 0.2;
    rSize[6] += 0.4;

  } else {
    //bigger
    rSize[0] -= 0.7;
    rSize[1] += 0.6;
    rSize[2] -= 3;
    rSize[3] += 0.2;
    //rSize[4] -= 0.7;
    rSize[5] -= 0.2;
    rSize[6] -= 0.4;

  }
  if(rSize[4]>500){rSize[4]=180;}
  
}

void BigCircle(int i){
  stroke(250,250,250);
  strokeWeight(0.1);
  noFill();
  ellipse(cwidth[i], cheight[i],rSize[i],rSize[i]);
  fill(255);
  textSize(20);
  textAlign(CENTER);
}

void SmallCircle(int i){
  fill(0, 0, 0);
  stroke(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 );
  strokeWeight(3);
  ellipse(cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
  ellipse(cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
  ellipse(cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
  ellipse(cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
  fill(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 );
  textSize(10);
  textAlign(CENTER);
  text(smallText[i][0], cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3);
  text(smallText[i][1], cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3);
  text(smallText[i][2], cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3);
  text(smallText[i][3], cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3);
}

void OtherCircle(){
  fill(0, 0, 0);
  stroke(250,250,250);
  strokeWeight(3);
  ellipse(350, 400, 80, 80);
  ellipse(410, 90, 80, 80);
  ellipse(550, 400, 80, 80);
  ellipse(800, 350, 80, 80);
  ellipse(760, 690, 80, 80);
  fill(250,250,250);
  textSize(10);
  textAlign(CENTER);
  text("高齢化", 350, 400);
  text("景気後退", 410, 90);
  text("医師不足\n医療崩壊", 550, 400);
  text("経済の\nブロック化", 800, 350);
  text("ひきこもり", 760, 690);

}

class Maru{
  float x,a;
  Maru(float x, float a){
    this.x=x;
    this.a=a;
    print(x);
    print(a);
  }
 
  void draw(){
      //if (mousePressed)
      //{
        
        for(int i=0; i<cwidth.length;i++){
          fill(color(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 ));  
          a+=x/100000;
          ellipse(cwidth[i]+rSize[i]*cos(a)/2, cheight[i]+rSize[i]*sin(a)/2,3,3);
        }
    //}
  }
}
