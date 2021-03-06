var colors = ["#1BA0C3","#1BB4C3","#1BC3BD","#1BC3A9","#1BC380","#1BC36C"];

// 2) CSVから２次元配列に変換
function csv2Array5(str) {
  var csvData5 = [];
  var lines5 = str.split("\n");
  for (var i = 0; i < lines5.length; ++i) {
    var cells5 = lines5[i].split(",");
    csvData5.push(cells5);
  }
  return csvData5;
}

function drawBarChart5(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels5 = [], tmpData15 = [], tmpData25 = [], tmpData35 = [];
  for (var row in data) {
    tmpLabels5.push(data[row][0])
    tmpData15.push(data[row][1])
    tmpData25.push(data[row][2])
    tmpData35.push(data[row][3])

  };

  // 5)chart.jsで描画
  var ctx5 = document.getElementById("Import").getContext("2d");
  var Import = new Chart(ctx5, {
    type: 'line',
    data: {
      labels: tmpLabels5,
      datasets: [
        { label: "食料品", data: tmpData15, borderColor: colors[0], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "原料品", data: tmpData25, borderColor: colors[1], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "鉱物性燃料", data: tmpData35, borderColor: colors[2], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
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
          stacked: true,
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            fontColor: "white",
                    fontSize: 10,
          }
        }],
      },
      legend: {
        display: true,
        fontColor: "white"
        //position: 'top',
        labels: {
          fontColor: "white",
          fontSize: 10,
          boxWidth: 10,
        }
      },
    }

  });
}


function main5() {
  // 1) ajaxでCSVファイルをロード
  var req5 = new XMLHttpRequest();
  var filePath5 = './data/Import.csv';
  req5.open("GET", filePath5, true);
  req5.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data5 = csv2Array5(req5.responseText);
    // 3) chart.jsデータ準備、5) chart.js描画の呼び出し
    drawBarChart5(data5);
  }
  req5.send(null);
}

main5();

$('#mychart').css('height','100%');



