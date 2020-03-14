let _data;
let _option;
let _chart;

_data = {
    labels: [],
    series: [[]]
};

_option = {
    axisX: {
        showLabel: false
    }
};

_chart = new Chartist.Line('#chart', _data, _option);

setInterval(() => {
    if (_data.series[0].length >= 80) {
        _data.labels.splice(0, 80);
        _data.series[0].splice(0, 80);
    }
}, fps);

setInterval(() => {
    _data.labels.push('x');
    _data.series[0].push(PEOPLE_HEALTHY.length);
    _chart.update();
}, 1000);
