var colors = ["#1BA0C3","#1BB4C3","#1BC3BD","#1BC3A9","#1BC380","#1BC36C"];

// 2) CSVから２次元配列に変換
function csv2Array4(str) {
  var csvData4 = [];
  var lines4 = str.split("\n");
  for (var i = 0; i < lines4.length; ++i) {
    var cells4 = lines4[i].split(",");
    csvData4.push(cells4);
  }
  return csvData4;
}

function drawBarChart4(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels4 = [], tmpData14 = [], tmpData24 = [], tmpData34 = [];
  for (var row in data) {
    tmpLabels4.push(data[row][0])
    tmpData14.push(data[row][1])
    tmpData24.push(data[row][2])
  };

  // 4)chart.jsで描画
  var ctx4 = document.getElementById("Bankruptcy").getContext("2d");
  var Bankruptcy = new Chart(ctx4, {
  type: 'bar',  
    data: {
      labels: tmpLabels4,
      datasets: [
        { label: "倒産数", data: tmpData14, /*borderColor: colors[0],*/ borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: 'rgba(57, 124, 189, 0.8)'},
        { type: 'line',label: "負債総額", data: tmpData24, borderColor: colors[1], borderWidth: 1, pointRadius: 0,yAxisID: "y-axis-2", backgroundColor: "rgba(255,255,255,0)"},
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        
        xAxes: [{
          position: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            maxRotation: 0, 
            minRotation: 0,
            autoSkip: true,
            maxTicksLimit: 5, //値の最大表示数
            fontColor: "white", // 文字の色
                    fontSize: 10,
          }
        }],
        yAxes: [{
          id: "y-axis-1",   // Y軸のID
          type: "linear",   // linear固定 
          position: "left", // どちら側に表示される軸か？
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            fontColor: "white",
            fontSize: 10,
          }
        }, {
          id: "y-axis-2",
          type: "linear", 
          position: "right",
          ticks: {
            fontColor: "white",
            fontSize: 10,
          },
        }],
      },
      legend: {
        display: true,
        //position: 'top',
        labels: {
          fontSize: 10,
          boxWidth: 10,
        }
      },
    }

  });
}


function main4() {
  // 1) ajaxでCSVファイルをロード
  var req4 = new XMLHttpRequest();
  var filePath4 = './data/Bankruptcy.csv';
  req4.open("GET", filePath4, true);
  req4.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data4 = csv2Array4(req4.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart4(data4);
  }
  req4.send(null);
}

main4();

$('#mychart').css('height','100%');



