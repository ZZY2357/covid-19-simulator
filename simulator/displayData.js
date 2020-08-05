let app;

app = new Vue({
    el: '#app',
    data: {
        DAY: 0,
        PEOPLE: PEOPLE_AMOUNT,
        HEALTHY_AMOUNT: 0,
        UNHEALTHY_AMOUNT: 0,
        BREAK_AMOUNT: 0,
        BEDS: BEDS
    },
    methods: {
        refresh: function() {
            app.DAY = DAY;
            app.HEALTHY_AMOUNT = 0;
            app.UNHEALTHY_AMOUNT = 0;
            app.BREAK_AMOUNT = 0;
            for (let i = 0; i < PEOPLE.length; i++) {
                if (PEOPLE[i].isHealthy) {
                    app.HEALTHY_AMOUNT++;
                } else {
                    app.UNHEALTHY_AMOUNT++;
                    if (PEOPLE[i].isBreak) {
                        app.BREAK_AMOUNT++;
                    }
                }
            }
        }
    }
});

setInterval(() => {
    app.refresh();
}, 60);
