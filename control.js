let control = {
    患病率: PROTECT,
    最大移动速度: PEOPLE_SPEED,
    大小: POINT_SIZE,
    康复时间: HAPPY_HEALTHY_DAY,
    暂停或开始: function() {
        if (_loop) {
            noLoop();
            _loop = false;
        } else {
            loop();
            _loop = true;
        }
    },
    新增十个病例: function() {
        for (let i = 0; i < 10; i++) {
            PEOPLE[uh_id].isHealthy = false;
            PEOPLE_UNHEALTHY.push(PEOPLE[uh_id]);
            PEOPLE_HEALTHY.splice(uh_id, 1);
            uh_id++;
        }
    },
    重新开始: function () {
        location.hash = escape(JSON.stringify(control));
        location.reload();
    }
};
let gui;
let _loop = true;
let uh_id = 0;
window.onload = function() {
    gui = new dat.GUI();
    let PlayOrStop = gui.add(control, '暂停或开始');
    let Protect = gui.add(control, '患病率', 0, 1);
    let Speed = gui.add(control, '最大移动速度', 0.01, 3);
    let Size = gui.add(control, '大小', 1, 18);
    let Time = gui.add(control, '康复时间', 1, 100);
    let NewS = gui.add(control, '新增十个病例');
    let Restart = gui.add(control, '重新开始');
    Speed.onChange(function(val) {
        PEOPLE_SPEED = val;
        for (let i = 0; i < PEOPLE_AMOUNT; i++) {
            PEOPLE[i].vx = randomGaussian(0.01, PEOPLE_SPEED);
            PEOPLE[i].vy = randomGaussian(0.01, PEOPLE_SPEED);
        }
    });
    Size.onChange(function(val) {
        POINT_SIZE = val;
    });
    Protect.onChange(function(val) {
        PROTECT = val;
    });
    Time.onChange(function(val) {
        HAPPY_HEALTHY_DAY = val;
    });
};
