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
        _data.labels.splice(0, 10);
        _data.series[0].splice(0, 10);
    }
}, fps);
