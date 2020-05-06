// 2) CSVから２次元配列に変換
function csv2Array(str) {
  var csvData = [];
  var lines = str.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
  }
  return csvData;
}

function drawBarChart(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels = [], tmpData1 = [], tmpData2 = [], tmpData3 = [], tmpData4 = [], tmpData5 = [], tmpData6 = [];
  for (var row in data) {
    tmpLabels.push(data[row][0])
    tmpData1.push(data[row][1])
    tmpData2.push(data[row][2])
    tmpData3.push(data[row][3])
    tmpData4.push(data[row][4])
    tmpData5.push(data[row][5])
    tmpData6.push(data[row][6])
  };

  // 4)chart.jsで描画
  var ctx = document.getElementById("AppleMobility").getContext("2d");
  var AppleMobility = new Chart(ctx, {
    type: 'line',
    data: {
      labels: tmpLabels,
      datasets: [
        { label: "retail & recreation", data: tmpData1, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "grocery & pharmacy", data: tmpData2, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
		{ label: "parks", data: tmpData3, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "transit stations", data: tmpData4, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
		{ label: "workplaces", data: tmpData5, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "residential", data: tmpData6, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
      ]
    },

    options: {
    	scales: {
    		
    		xAxes: [{
    			position: 'bottom',
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
    			ticks: {
    				fontColor: "white",
                    fontSize: 10,
    			}
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


function main() {
  // 1) ajaxでCSVファイルをロード
  var req = new XMLHttpRequest();
  var filePath = './data/AppleMobility.csv';
  req.open("GET", filePath, true);
  req.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data = csv2Array(req.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart(data);
  }
  req.send(null);
}

main();




