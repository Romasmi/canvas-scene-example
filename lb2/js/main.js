(function()
{
    const dashboard = document.getElementById('dashboard');
    dashboard.width = dashboard.offsetWidth;
    dashboard.height = dashboard.offsetHeight;
    const ctx = dashboard.getContext('2d');
    const graphic = new Graphic
    ({
        ctx: ctx
    });

    graphic.drawSky
    ({
        dashboardWidth: dashboard.width,
        dashboardHeight: dashboard.height
    });

    graphic.drawFloor
    ({
        dashboardWidth: dashboard.width,
        dashboardHeight: dashboard.height
    });

    graphic.drawHouse
    ({
        dashboardWidth: dashboard.width,
        dashboardHeight: dashboard.height
    });

    /*draw clouds*/
    graphic.drawCloud
    ({
        dashboardWidth: dashboard.width,
        dashboardHeight: dashboard.height,
        x: dashboard.width / 10 * 1,
        y: 50,
        viewCoefficient: 0.9
    });

    graphic.drawCloud
    ({
        dashboardWidth: dashboard.width,
        dashboardHeight: dashboard.height,
        x: dashboard.width / 10 * 4,
        y: 50,
        viewCoefficient: 1.2
    });

    graphic.drawCloud
    ({
        dashboardWidth: dashboard.width,
        dashboardHeight: dashboard.height,
        x: dashboard.width / 10 * 9,
        y: 50,
        viewCoefficient: 0.5
    });

    graphic.drawSun
    ({
        dashboardWidth: dashboard.width,
        dashboardHeight: dashboard.height,
        x: 0,
        y: 0,
    });
})();



