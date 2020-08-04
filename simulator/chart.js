let _data;
let _option;
let _chart;

_data = {
    labels: [],
    series: [[]]
};

_option = {
    axisX: {
        showLabel: true
    }
};

_chart = new Chartist.Line('#chart', _data, _option);

setInterval(() => {
    if (_data.series[0].length >= 40) {
        _data.labels.splice(0, 80);
        _data.series[0].splice(0, 80);
    }
}, fps);
