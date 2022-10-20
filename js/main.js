// const url = '【API URL】';
const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo';


fetch(url) // URLにアクセス
.then(data => data.json()) // レスポンスをdataに格納
.then(json => drawChart(json)) // 追加

function drawChart(json) {
  console.log(json) // 変更(記述箇所を修正)
  const mydata = {
    labels: json.daily.time,
    datasets: [{
      label: '最高気温',
      data: json.daily.temperature_2m_max,
      borderColor: 'rgb(192, 75, 75)',
    },{
      label: '最低気温',
      data: json.daily.temperature_2m_min,
      borderColor: 'rgb(75, 75, 192)',
    }]
  }

  new Chart(document.getElementById('stage'), {
    type: 'line',
    data: mydata,
  });
}
