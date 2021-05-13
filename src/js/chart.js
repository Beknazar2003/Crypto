google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawPriceChart)
google.charts.setOnLoadCallback(drawMarketChart)

var options = {
    legend: 'none',
    pointSize: 5,
    height: 300,
    width: 700
  }


function drawPriceChart() {
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Price'],
    ['Oct. 17', 550],
    ['Nov. 17', 700],
    ['Dec. 17', 750],
    ['Jan. 17', 700],
    ['Feb. 17', 850],
  ])

  var chart = new google.visualization.LineChart(
    document.getElementById('price_chart')
  )

  chart.draw(data, options)
}
function drawMarketChart() {
    var data = google.visualization.arrayToDataTable([
      ['Date', 'Market'],
      ['Oct. 17', 550],
      ['Nov. 17', 700],
      ['Dec. 17', 750],
      ['Jan. 17', 700],
      ['Feb. 17', 850],
    ])
  
    var chart = new google.visualization.LineChart(
      document.getElementById('market_chart')
    )
  
    chart.draw(data, options)
  }
