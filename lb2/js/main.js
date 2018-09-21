(function()
{
    const dashboard = document.getElementById('dashboard');
    dashboard.width = dashboard.offsetWidth;
    dashboard.height = dashboard.offsetHeight;
    const ctx = dashboard.getContext('2d');
    const graphic = new StaticGraphic
    ({
        dashboard: dashboard,
        ctx: ctx
    });

    //graphic.drawStaticPicture();

    const animatedGraphic = new AnimatedGraphic({
        dashboard: dashboard,
        ctx: ctx
    });

    setInterval(function () {
        animatedGraphic.redraw();
    }, 17);
})();



