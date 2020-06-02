var colors = ["#7BDFF2","#B2F7EF","#EFF7F6","#F7D6E0","#F2B5D4","#DABFFF"];

// 2) CSVから２次元配列に変換
function csv2Array12(str) {
  var csvData12 = [];
  var lines12 = str.split("\n");
  for (var i = 0; i < lines12.length; ++i) {
    var cells12 = lines12[i].split(",");
    csvData12.push(cells12);
  }
  return csvData12;
}

function drawBarChart12(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpData12 = [[],[],[],[]];
  for (var row in data) {
    tmpData12[0].push(data[row][0])
    tmpData12[1].push(data[row][1])
    tmpData12[2].push(data[row][2])
    tmpData12[3].push(data[row][3])
  };
  var demo = document.getElementById("samurai4");
  demo.innerHTML = (data[row][2]-50).toFixed(1);

  // 12)chart.jsで描画
  var config12 =
  {
    type: 'bar', 
    data: {
      labels: tmpData12[0],
      datasets: [
        { label: "正規の職員・従業員", fontColor: "#fff", data: tmpData12[2], borderColor: colors[1], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: "rgba(255,255,255,0)"},
        { label: "非正規の職員・従業員", data: tmpData12[3], borderColor: colors[2], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: "rgba(255,255,255,0)"},
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { 
        xAxes: [{
          stacked: true,
          position: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {maxRotation: 0, minRotation: 0, autoSkip: true, maxTicksLimit: 5, fontColor: "white", fontSize: 10,}
        }],
        yAxes: [{
          stacked: true,
          id: "y-axis-1", 
          type: "linear", 
          position: "left",
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {fontColor: "white",fontSize: 10,}
        }, {
          id: "y-axis-2",
          type: "linear", 
          position: "right",
          ticks: {fontColor: "white", fontSize: 10,},
        }],
      },
      legend: {
        display: true,
        //position: 'top',
        labels: {
          fontColor: "white",
          fontSize: 10,
          boxWidth: 10,
        }
      },
    }
  }
  return config12;
}


var EmploymentStatus;


//リフレッシュ
//function change(newType) {
function main12() {
  //if (EmploymentStatus) {EmploymentStatus.destroy();}
  // 1) ajaxでCSVファイルをロード
  var req12 = new XMLHttpRequest();
  var filePath12 = './data/EmploymentStatus.csv';
  req12.open("GET", filePath12, true);
  req12.onload = function() {
    // 2) CSVデータ変換の呼び出し
    var ctx12 = document.getElementById("EmploymentStatus").getContext("2d");
    data12 = csv2Array12(req12.responseText);
    // 3) chart.jsデータ準備、12) chart.js描画の呼び出し
    var config12 = drawBarChart12(data12);
    var temp12 = jQuery.extend(true, {}, config12);
    temp12.type = "line";//newType;
    if(newType == line){temp12.data = {labels: tmpData12[0],datasets: [{ label: "非正規率", data: tmpData12[1], borderColor: colors[0], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-2",},]}}
    EmploymentStatus = new Chart(ctx12, temp12);
  }
  req12.send(null);
}


$('#mychart').css('height','100%');
//ボタン選択
change("line");
$("#line").click(function() {change('line');});
$("#bar").click(function() {change('bar');});






