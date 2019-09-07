var xValue = ['2012', '2013', '2014', '2015'];

var trace1 = {
  x: xValue,
  y: [4, 0, 0, 0],
  name: 'Нефтегазовое дело',
  type: 'bar',
  text: yValue,
  // opacity: 0.1,
  textposition: 'auto',
  hoverinfo: 'none',
};

var trace2 = {
  x: xValue,
  y: [0, 11, 14, 0],
  type: 'bar',
  name: 'Электроэнергетика и электротехника',
  text: yValue2,
  textposition: 'auto',
  hoverinfo: 'none',
};

var trace3 = {
  x: xValue,
  y: [0, 0, 0, 16],
  type: 'bar',
  name: 'Информатика и вычислительная техника',
  text: yValue2,
  textposition: 'auto',
  hoverinfo: 'none',
};

var data = [trace1,trace2, trace3];

var layout = {
  title: 'Количество ППС моложе 35 лет',
  barmode: 'group',
  autosize: true,
  legend: {
    x: 10,
    y: 1
  }
};

Plotly.newPlot('chart5', data, layout, {showSendToCloud:true});