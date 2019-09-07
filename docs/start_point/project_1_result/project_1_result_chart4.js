var xValue = ['2012', '2013', '2014', '2015'];

var trace1 = {
  x: xValue,
  y: [7, 0, 0, 0],
  name: 'Нефтегазовое дело',
  type: 'bar',
  text: yValue,
  // opacity: 0.1,
  textposition: 'auto',
  hoverinfo: 'none',
};

var trace2 = {
  x: xValue,
  y: [0, 27, 29, 0],
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
  // name: 'РФ',
  title: 'ППС прошли обучение на курсах повышения квалификации',
  barmode: 'group',
  autosize: true,
  };

Plotly.newPlot('chart4', data, layout, {showSendToCloud:true});