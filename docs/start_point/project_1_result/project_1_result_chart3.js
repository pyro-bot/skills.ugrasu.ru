var xValue = ['2012', '2013', '2014', '2015'];

var yValue = [0, 0, 52, 50];
var yValue2 = [40, 49, 49, 55];
var yValue3 = [30, 50, 55, 50];

var trace1 = {
  x: xValue,
  y: yValue,
  name: 'Нефтегазовое дело',
  type: 'bar',
  text: yValue,
  // opacity: 0.1,
  textposition: 'auto',
  hoverinfo: 'none',
};

var trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  name: 'Электроэнергетика и электротехника',
  text: yValue2,
  textposition: 'auto',
  hoverinfo: 'none',
};

var trace3 = {
  x: xValue,
  y: yValue3,
  type: 'bar',
  name: 'Информатика и вычислительная техника',
  text: yValue2,
  textposition: 'auto',
  hoverinfo: 'none',
};

var data = [trace1,trace2, trace3];

var layout = {
  // name: 'РФ',
  title: 'Студентов первого курса по направлениям',
  barmode: 'group',
  autosize: true,
  legend: {
    x: 10,
    y: 1
  }
};

Plotly.newPlot('chart3', data, layout, {showSendToCloud:true});