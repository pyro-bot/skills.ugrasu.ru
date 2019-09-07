var xValue = ['2012', '2013', '2014', '2015'];

var yValue = [3.6, 31.52, 3.6, 0];
var yValue2 = [6, 11.1, 16, 20];

var trace1 = {
  x: xValue,
  y: yValue,
  name: 'РФ',
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
  name: 'СОФИН',
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
  // title: 'January 2013 Sales Report',
  barmode: 'stack'
};

Plotly.newPlot('chart1', data, layout, {showSendToCloud:true});