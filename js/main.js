// 'use strict';

// const url = '【API URL】';
const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo';


fetch(url)
.then(data => data.json())
.then(json => console.log(json))
.then(json => drawChart(json)) // 追加 //指摘箇所

function drawChart(json) {
  const mydata = {
    labels: json.daily.time, // 指摘箇所
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

// hourly
