(function()
{
    const dashboard = document.getElementById('dashboard');
    dashboard.width = dashboard.offsetWidth;
    dashboard.height = dashboard.offsetHeight;
    const ctx = dashboard.getContext('2d');
    const graphic = new Pen
    ({
        ctx: ctx
    });

    /*draw sky*/
    graphic.drawRect
    ({
        x1: 0,
        y1: 300,
        width: dashboard.width,
        height: dashboard.height,
        fillColor: '#6aa84f'
    });

    /*draw floor*/
    graphic.drawRect
    ({
        x1: 0,
        y1: 0,
        width: dashboard.width,
        height: 300,
        fillColor: '#3c78d8'
    });

    /*draw house body*/
    graphic.drawRect
    ({
        x1: 300,
        y1: 200,
        width: 200,
        height: dashboard.height,
        fillColor: '#bf9000'
    });

    /*draw window*/
    graphic.drawWindow();
})();