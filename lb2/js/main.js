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

    graphic.drawStaticPicture(dashboard);
})();



