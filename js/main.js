// 'use strict';

// const url = '【API URL】';
const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo';


fetch(url)
.then(data => data.json())
.then(json => console.log(json))

function drawChart(json) {
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
