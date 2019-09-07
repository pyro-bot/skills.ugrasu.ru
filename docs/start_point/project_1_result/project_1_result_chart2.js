var xValue = ['2012', '2013', '2014', '2015'];

var yValue = [9, 56, 50, 20];
var yValue2 = [0, 0, 0, 50];

var trace1 = {
  x: xValue,
  y: yValue,
  name: 'Разработано УМКД',
  type: 'bar',
  text: yValue,
  textposition: 'auto',
  hoverinfo: 'none',
  // opacity: 0.5,
  // marker: {
  //   color: 'rgb(158,202,225)',
  //   line: {
  //     color: 'rbg(8,48,107)',
  //     width: 1.5
  //   }
  // }
};

var trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  name: 'Модернизация УМКД',
  text: yValue2,
  textposition: 'auto',
  hoverinfo: 'none',
  // marker: {
  //   color: 'rgba(58,200,225,.5)',
  //   line: {
  //     color: 'rbg(8,48,107)',
  //     width: 1.5
  //   }
  // }
};

var data = [trace1,trace2];

var layout = {
  // name: 'РФ',
  title: 'Разработано УМКД',
  barmode: 'group'
};

Plotly.newPlot('chart2', data, layout, {showSendToCloud:true});